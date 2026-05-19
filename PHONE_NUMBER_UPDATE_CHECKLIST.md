# Phone Number Update Checklist

**Goal:** Change the displayed phone number from `+216 26 790 175` to `26 790 175` across the application.

## Files to Update

- [x] **`src/components/common/Header.tsx`**
  - Locate the contact information in the header.
  - Update the display text `+216 26 790 175` to `26 790 175`.
- [x] **`src/components/common/Footer.tsx`**
  - Locate the contact information in the footer section.
  - Update the display text `+216 26 790 175` to `26 790 175`.
- [x] **`src/app/contact/page.tsx`**
  - Locate the phone number on the contact page.
  - Update the display text `+216 26 790 175` to `26 790 175`.

## Notes
* Be careful with `tel:` links. The `href="tel:+21626790175"` attribute should ideally keep the country code (`+216`) so that clicking the link works for international dialing, even though the display text visible to the user will be `26 790 175`.
