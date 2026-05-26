"use client";

import React, { useState, useRef, useEffect, useCallback } from 'react';
import styles from './BeforeAfterSlider.module.css';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  title: string;
  description?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  title,
  description
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let position = (x / rect.width) * 100;
    if (position < 0) position = 0;
    if (position > 100) position = 100;
    setSliderPosition(position);
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  }, [isDragging, handleMove]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove]);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    handleMove(e.clientX);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    handleMove(e.touches[0].clientX);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      <div 
        ref={containerRef} 
        className={styles.sliderContainer}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        {/* Before Image (underneath) */}
        <img 
          src={beforeImage} 
          alt={`${title} - Avant`} 
          className={`${styles.image} ${styles.beforeImage}`}
          loading="lazy"
        />
        <span className={`${styles.label} ${styles.beforeLabel}`}>Avant</span>

        {/* After Image (on top, clipped) */}
        <img 
          src={afterImage} 
          alt={`${title} - Après`} 
          className={styles.image}
          style={{ 
            clipPath: `inset(0 0 0 ${sliderPosition}%)`,
            zIndex: 2
          }}
          loading="lazy"
        />
        <span className={`${styles.label} ${styles.afterLabel}`}>Après</span>

        {/* Slider line / handle */}
        <div 
          className={styles.divider} 
          style={{ left: `${sliderPosition}%` }}
        >
          <div className={styles.handle}>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className={styles.handleSvg}
            >
              <path d="m9 18-6-6 6-6" className={styles.arrowLeft} />
              <path d="m15 6 6 6-6 6" className={styles.arrowRight} />
            </svg>
          </div>
        </div>
      </div>

      {/* Case Details */}
      <div className={styles.caseInfo}>
        <h4 className={styles.title} dangerouslySetInnerHTML={{ __html: title }} />
        {description && <p className={styles.description} dangerouslySetInnerHTML={{ __html: description }} />}
      </div>
    </div>
  );
}
