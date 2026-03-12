# Content Model

## Goal

This project is a single-page 11ty site. Content should stay structured, replaceable, and maintainable without editing templates for routine updates.

## Core Rules

- Page content should primarily live in Markdown files, JSON files, or template-specific data files such as `index.11tydata.json`.
- Templates in `src/_includes/` should render content, not define it.
- Repeated content blocks should be modeled as structured arrays or objects, not HTML strings.
- Only store freeform HTML in data when the alternative structure would be disproportionately complex.

## Current Project Pattern

- `src/index.md` remains the thin page shell.
- `src/index.11tydata.json` contains most editable page content.
- `.pages.yml` defines the Pages CMS schema for editing that content online.
- Components in `src/_includes/` expect structured data, for example for navigation items, quick facts, talks, FAQ items, or supporting program entries.

## Preferred Content Shapes

- Intro and long-form copy: Markdown or clearly named text fields in data files.
- Lists such as navigation items, talks, FAQ items, quick facts, and supporting program entries: arrays of objects.
- Shared labels, URLs, or metadata: central data files in `src/_data/` when used in more than one place.
- Use plain strings for text that editors will change in Pages CMS; reserve HTML for rare cases that truly require markup.
- Keep soft hyphen hints such as `&shy;` in long display strings when mobile wrapping needs editorial control.

## Avoid

- Large inline HTML blocks inside Markdown files.
- Business logic or content fallbacks directly inside Nunjucks templates.
- Mixing content and layout concerns in the same data structure when they can be separated cleanly.
- Reintroducing editable site copy into `header.njk`, `navigation.njk`, or `donate.njk` when it already belongs in `src/index.11tydata.json`.
