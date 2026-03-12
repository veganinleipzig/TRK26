# Assets

## Principle

Assets should be easy to manage, clearly named, and suitable for a static 11ty site.

## Storage

- Local images live under `src/images/`.
- Styles live under `src/assets/css/` and `src/assets/sass/`.
- Local fonts live under `src/assets/fonts/`.
- JavaScript lives under `src/assets/js/` for theme scripts and under `src/scripts/` for bundled project logic.
- Generated preview output lives under `output/site/`.
- Static theme assets such as `src/assets/js/` and `src/assets/webfonts/` are copied by Eleventy passthrough rules, not by separate manual sync steps.

## Images

- Prefer local assets for stable builds and reproducible previews.
- Runtime pages should not depend on remote image, font, CSS, or JS hosts unless there is a deliberate exception.
- Hero images must work on both mobile and desktop; the important crop should not only read well at one breakpoint.
- Keep source images and intermediate working files understandable. In this repository, the currently used speaker and framework images live under `src/images/placedog/`, and the hero image lives under `src/images/hero/`.

## Naming

- Keep file names clear and stable.
- Add new assets with descriptive names instead of generic copies such as `final-new-new.jpg`.

## Maintenance

- Remove unused assets during larger cleanup work when it is clear they are no longer referenced.
- Do not reorganize existing theme assets without a clear reason.
- If a new asset becomes part of editor-managed content, ensure `.pages.yml` exposes it correctly through the existing media settings.
