# Frontend Mentor - Meet landing page solution

![Design preview for the Meet landing page coding challenge](./screenshot.jpg)

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)

---

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://github.com/TomSif/Front-End_Mentor_Meet-Landing-Page)
- Live Site URL: [Add live site URL here](https://front-end-mentor-meet-landing-page.vercel.app/)

---

## My process

### Built with

- Semantic HTML5 markup
- Mobile-first workflow
- Flexbox & CSS Grid
- [React 19](https://reactjs.org/) - JS library
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS v4](https://tailwindcss.com/) - Utility-first CSS

### What I learned

This challenge was part of a deliberate effort to rebuild coding fluency after a break. A few things that stood out:

**Design tokens with Tailwind v4 `@theme`**  
Setting up custom colors and font families directly in CSS via `@theme` felt clean and made utility classes available globally without config files.

**Responsive images with `<picture>` and `srcSet`**  
Using the `<picture>` element with `media` queries to serve different image assets per breakpoint — useful for the hero section where the layout switches between tablet and desktop.

**CSS pseudo-elements in Tailwind (`after:`)**  
Using `after:absolute after:inset-0 after:bg-cyan-600/80` to layer a semi-transparent color overlay on the footer background image, keeping the markup clean.

**`translate-y-1/2` for overlapping components**  
The NumberedDivider circle overlaps the sections above and below it. Using `translate-y-1/2` on the circle itself made it snap precisely to the boundary regardless of its size.

**`justify-content` vs `align-items`**  
A good reminder that pushing items along the main axis uses `justify-`, not `self-` (which acts on the cross axis).

### Continued development

- Deepen understanding of CSS Grid for complex layouts
- Practice more with Tailwind v4's new `@theme` and `@layer` patterns
- Work on managing component spacing and overlap more systematically

### AI Collaboration

This project was built with Claude (Anthropic) as a coding mentor, used via the Claude.ai interface.

- **How I used it:** As a Socratic guide — Claude asked questions, gave targeted hints, and let me work through problems myself rather than providing ready-made solutions. It helped me recall syntax I'd forgotten after a break without replacing the thinking.
- **What worked well:** The hint progression ("think about what property fills an element with color...") helped rebuild reflexes rather than create dependency.
- **What didn't:** For very quick syntax lookups (e.g. "what's the Tailwind class for border color?"), a direct answer would have been faster — the pedagogical friction isn't always useful.

---

## Author

- Website - [thomas-sifferle.com](https://www.thomas-sifferle.com/)
- Frontend Mentor - [@TomSif](https://www.frontendmentor.io/profile/TomSif)
- GitHub - [@TomSif](https://github.com/TomSif)
