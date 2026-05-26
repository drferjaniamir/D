import type { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import Map from "@/components/sections/Map";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.dentavip.com",
  },
};

async function getReviews() {
  const apiKey = process.env.FEATURABLE_API_KEY;
  const widgetId = process.env.FEATURABLE_WIDGET_ID;

  if (!apiKey || !widgetId) {
    return null;
  }

  try {
    const response = await fetch(`https://featurable.com/api/v1/widgets/${widgetId}?api_key=${apiKey}`, {
      headers: {
        'Accept': 'application/json',
      },
      next: { revalidate: 3600 }
    });

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    if (data && data.reviews) {
      data.reviews = data.reviews.filter((r: any) => 
        (r.comment && r.comment.trim().length > 0) || (r.starRating >= 4)
      );
    }
    return data;
  } catch (error) {
    return null;
  }
}

export default async function Home() {
  const reviewsData = await getReviews();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Testimonials initialData={reviewsData} />
        <CTA />
        <Map />
      </main>
      <Footer />
    </>
  );
}
