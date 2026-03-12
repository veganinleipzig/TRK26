# Design Rules

## General Approach

The project is mobile-first. Every layout decision should work on phones first and then scale up deliberately for tablets and desktops.
The current visual language is editorial and poster-like. New UI work should preserve that direction unless there is an explicit redesign.

## Layout

- Keep line lengths controlled on desktop; avoid overly long text rows.
- Sections should be clearly separated, but without heavy or dominant dividers.
- Desktop enhancements should be progressive, not desktop-first layouts patched later for mobile.

## Components

- Evolve existing components consistently instead of creating new variants for similar problems.
- Cards, FAQ boxes, and info elements should stay compact and avoid unnecessary vertical bulk.
- Use overlay effects sparingly and always validate readability.
- Preserve the editorial character: strong typography, restrained accents, and image-led composition should feel intentional rather than corporate.

## Color and Typography

- Use accent colors with restraint; they should guide, not dominate.
- Prioritize strong text contrast, especially on images and semi-transparent surfaces.
- Create visual hierarchy through size, weight, and spacing, not only through saturated color blocks.
- Do not introduce glossy or generic SaaS-style components that clash with the poster/editorial palette and type system.

## Responsive Rules

- Mobile is the primary reference layout.
- Tablet needs its own review, not just a fallback between mobile and desktop.
- Avoid horizontal overflow in all key areas, especially navigation, hero, talk cards, and FAQ sections.
- Desktop sticky navigation may use full-bleed background treatment, but its interactive content should stay aligned to the main content width.
