# Induxion Landing Page Development

> Official landing page development for INDUXION

## Getting Started
This development using __Jekyll__ and __Markdown__ syntax for creating a page. Besure to read it's documentation before start developing this project.

### Pre-Requisites
- Ruby/Gem
- Node JS
- Yarn (Optional)

### Installing
- Run `gem install bundler jekyll`
- Run `npm install` or `yarn install`

## Commands
- `npm run dev`: Running the development server

## Structures
- `_data`: Static __YML__ data.
- `_includes`:
    - `_components`: All re-usable components.
    - `_commons`: Non re-usable components.
- `_layouts`: All pages layouts.
- `_styles`:
    - `main.scss`: Main SCSS for development.
    - `*/*.scss`: All SCSS files.
- `assets`: All static assets files and generated CSS.