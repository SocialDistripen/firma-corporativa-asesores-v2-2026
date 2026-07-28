# Active Context: Next.js Starter Template

## Current State

**Template Status**: ✅ Ready for development

The template is a clean Next.js 16 starter with TypeScript and Tailwind CSS 4. It's ready for AI-assisted expansion to build any type of application.

## Recently Completed

- [x] Base Next.js 16 setup with App Router
- [x] TypeScript configuration with strict mode
- [x] Tailwind CSS 4 integration
- [x] ESLint configuration
- [x] Memory bank documentation
- [x] Recipe system for common features
- [x] Gmail signature generator page (form + live preview + copy-to-clipboard)
- [x] Replaced generarFirmaHTML() with exact HTML exported from Gmail (preserves `<font face>`, `clamp()`, `0.8rem` — the exact format Gmail itself uses and preserves on paste)
- [x] Fixed copy-to-clipboard: replaced Clipboard API blob approach with `execCommand('copy')` on a rendered off-screen `contenteditable` div — this sends rich HTML to the clipboard exactly as Gmail's signature editor expects
- [x] Hardened signature HTML for cross-browser/email-client compatibility: removed all `<font>` tags (replaced with `<span>` + explicit inline styles), expanded all shorthand CSS to individual properties (padding-top/right/bottom/left, margin-top/right/bottom/left), replaced `clamp()` with fixed `18px` for name, replaced `rgb()` colors with hex (#333333, #FFD93D, #212121), replaced `0.8rem` font-sizes with `13px`/`12px`, added full font-family fallback stacks, fixed `padding:0 px` typo
- [x] Fixed social media icons: replaced `<p>` wrapper with a `<table>` single-row layout to guarantee horizontal alignment in all email clients; added `border:0;outline:none;text-decoration:none;display:block;` to `<img>` tags and `border:0;line-height:0;` to `<a>` tags to remove all visible hyperlink effects (underline, blue border)

## Current Structure

| File/Directory | Purpose | Status |
|----------------|---------|--------|
| `src/app/page.tsx` | Home page | ✅ Ready |
| `src/app/layout.tsx` | Root layout | ✅ Ready |
| `src/app/globals.css` | Global styles | ✅ Ready |
| `.kilocode/` | AI context & recipes | ✅ Ready |

## Current Focus

The template is ready. Next steps depend on user requirements:

1. What type of application to build
2. What features are needed
3. Design/branding preferences

## Quick Start Guide

### To add a new page:

Create a file at `src/app/[route]/page.tsx`:
```tsx
export default function NewPage() {
  return <div>New page content</div>;
}
```

### To add components:

Create `src/components/` directory and add components:
```tsx
// src/components/ui/Button.tsx
export function Button({ children }: { children: React.ReactNode }) {
  return <button className="px-4 py-2 bg-blue-600 text-white rounded">{children}</button>;
}
```

### To add a database:

Follow `.kilocode/recipes/add-database.md`

### To add API routes:

Create `src/app/api/[route]/route.ts`:
```tsx
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Hello" });
}
```

## Available Recipes

| Recipe | File | Use Case |
|--------|------|----------|
| Add Database | `.kilocode/recipes/add-database.md` | Data persistence with Drizzle + SQLite |

## Pending Improvements

- [ ] Add more recipes (auth, email, etc.)
- [ ] Add example components
- [ ] Add testing setup recipe

## Session History

| Date | Changes |
|------|---------|
| Initial | Template created with base setup |
| 2026-02-19 | Hardened generarFirmaHTML() in page.tsx: removed all `<font>` tags, expanded all shorthand CSS, replaced clamp()/rgb()/0.8rem with fixed values, added full font-family fallback stacks |
