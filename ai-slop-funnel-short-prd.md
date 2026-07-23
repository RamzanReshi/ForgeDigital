# AI Slop → Clean Website Booking Funnel

## Goal

Build a one-page web design booking funnel.

The page starts as an exaggerated AI-generated agency website, then transforms on scroll into a clean, intentional website. After that, the same fixed viewport morphs through a few short sales scenes and ends as an embedded Cal.com booking calendar.

There should be no normal section-by-section scrolling. Scroll only controls the animation timeline.

---

## Stack

- React
- Vite
- TypeScript
- Tailwind CSS
- GSAP + ScrollTrigger
- Lucide React
- Cal.com inline embed

Keep the project simple, fast, responsive, and Vercel-ready.

---

## Main Experience

Use:

- One tall scroll container
- One `position: sticky` full-screen stage
- A GSAP timeline linked to scroll progress
- Reversible animations when scrolling upward

Suggested sequence:

1. AI-slop homepage
2. Morph into clean homepage
3. Problem / comparison
4. Selected work
5. Simple process
6. Cal.com booking scene

Every scene should morph into the next using shared elements. Avoid making it feel like a slideshow.

---

## Opening Scene

Headline:

> Are you tired of AI giving you AI-slop websites?

Supporting text:

> Generic gradients, empty copy, fake metrics and flashy sections that do nothing for your business.

Prompt:

> Scroll to fix the website

The first design should intentionally include:

- Purple/blue gradients
- Glass cards
- Fake charts
- Fake metrics
- AI-style illustrations
- Too many CTAs
- Generic copy
- Excessive glow and rounded corners

---

## Clean Homepage

Headline:

> Professional websites that build trust and bring in clients.

Supporting text:

> We design conversion-focused websites for service businesses that want more enquiries, stronger credibility and a clearer customer journey.

CTAs:

- Book Your Free Website Review
- See Our Work

Project names:

- On Time Removals
- MRT Kuru Buz
- Süleyman Seven
- SASK
- Hikely

Clean style:

- Warm neutral background
- Strong typography
- Clear spacing
- Minimal effects
- Real proof
- One clear conversion path

---

## Later Scenes

Keep them concise.

### Problem

> A website can look modern and still lose customers.

Mention issues like unclear offers, generic copy, weak trust, and poor booking flow.

### Comparison

Show simple before vs after points:

- Vague copy → Clear offer
- Random effects → Purposeful design
- Fake proof → Real work
- Many CTAs → One focused journey

### Work

Show a few featured projects using placeholder screenshots.

### Process

Use four steps:

1. Understand
2. Position
3. Design
4. Build and launch

---

## Booking Scene

Final headline:

> Book your free website review.

Supporting text:

> We’ll review your current website, identify the biggest issues and explain what we would change.

Show:

- 20 minutes
- Google Meet
- Practical feedback
- No pressure

The CTA should expand or morph into the Cal.com embed.

Use one config value:

```ts
export const CAL_LINK = "YOUR_CAL_USERNAME/YOUR_EVENT";
```

Do not hardcode the link in multiple files.

---

## Important Requirements

- Use real HTML/CSS, not a video
- Keep the viewport visually fixed
- Make scroll control the animation
- Reuse elements between scenes
- Smoothly reverse on upward scroll
- Keep mobile simpler
- Respect `prefers-reduced-motion`
- Keep Cal.com fully interactive
- Avoid heavy effects that hurt performance
- Use placeholders where assets are missing
- Ensure the project builds without TypeScript errors

---

# Claude Prompt

```text
Build the complete frontend described in this Markdown file.

Use React, Vite, TypeScript, Tailwind CSS, GSAP ScrollTrigger, Lucide React and a Cal.com inline embed.

Create one tall scroll container with one sticky full-screen stage. The page should not visibly scroll through normal stacked sections. Scroll progress should control a reversible animation timeline.

Start with an exaggerated AI-slop agency homepage. Morph it into a clean, intentional web design homepage. Then morph through a short problem/comparison scene, featured work, process, and finally an embedded Cal.com booking calendar.

Reuse shared elements so the experience feels like one website rebuilding itself, not a slideshow. For example, fake dashboard cards can become project previews, generic logos can become real project proof, and the main CTA can expand into the calendar.

Keep the architecture clean but not overengineered. Make sensible visual and animation decisions where the brief is not specific.

Use:

export const CAL_LINK = "YOUR_CAL_USERNAME/YOUR_EVENT";

Keep the Cal.com link in one config file.

Requirements:
- Responsive
- Smooth desktop animation
- Simplified mobile animation
- Reduced-motion fallback
- Semantic and accessible
- Vercel-ready
- No autoplay video
- Real HTML/CSS interface elements
- Build successfully with no TypeScript errors

Inspect the existing repository, install missing dependencies, implement the full frontend, run the production build, fix errors, and summarize the changed files.
```
