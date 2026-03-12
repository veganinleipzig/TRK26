# AGENTS

## Repo Rules

- This repository is a static 11ty site with no backend and no infrastructure concerns.
- Prefer content in Markdown, JSON, or template-specific data files such as `*.11tydata.json` instead of putting it directly in templates.
- Keep templates in `src/_includes/` presentation-focused; avoid maintaining content there.
- Keep `.pages.yml` aligned with the current `src/index.11tydata.json` structure so Pages CMS remains usable.
- Work mobile-first and always check layout changes for small viewports.
- Use the existing build and preview workflows instead of introducing new toolchains.
- Prefer local fonts, images, and other assets over remote runtime dependencies.
- Let 11ty passthrough copy handle static theme assets such as `src/assets/js/` and `src/assets/webfonts/` instead of reintroducing extra copy scripts.
- After relevant site changes, refresh `output/site` so preview and deployment stay in sync.
- Verify UI-affecting changes with Playwright before closing the task, especially for mobile or responsive fixes.
- Keep changes small, traceable, and close to established 11ty conventions.
