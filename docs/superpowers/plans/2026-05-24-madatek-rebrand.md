# Madatek Rebrand Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a complete static redesign for Madatek using the current brand colors, logo, relevant existing assets, and a modern human BPO direction.

**Architecture:** The site is a single static landing page with local assets only. `index.html` owns content and semantics, `styles.css` owns visual direction and responsive behavior, and `script.js` owns menu, scroll reveal, and light interaction.

**Tech Stack:** Vanilla HTML, CSS, JavaScript, local PNG/JPG/SVG assets.

---

### Task 1: Static Site Structure

**Files:**
- Create: `index.html`
- Create: `styles.css`
- Create: `script.js`
- Create: `assets/generated/brand-wave.svg`
- Create: `assets/generated/ops-map.svg`

- [ ] Build the page sections: header, hero, proof metrics, services, human capital, infrastructure, process, careers, contact, footer.
- [ ] Use the local Madatek logo and selected current-site imagery from `assets/img`.
- [ ] Add accessible navigation, one `h1`, meaningful alt text, and visible focus states.

### Task 2: Direction Artistique

**Files:**
- Modify: `styles.css`

- [ ] Define tokens for Madatek navy, red, white, and secondary data accents.
- [ ] Create the signature red wave and command-center grid without decorative filler imagery.
- [ ] Add responsive layouts that preserve readable text on mobile and desktop.

### Task 3: Interaction And Verification

**Files:**
- Modify: `script.js`

- [ ] Add mobile navigation, scroll reveal, active nav state, and reduced-motion respect.
- [ ] Run a local static server.
- [ ] Verify desktop and mobile screenshots in Chrome or a browser automation tool.
