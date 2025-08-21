# Blog Multistep Wizard

A clean, simple blog app built with the Next.js **App Router**. Create posts through a **4-step wizard** (Metadata → Summary/Category → Content → Review), then see them on the homepage. Data is stored locally via `localStorage`.

## Live Demo
[Blog Multistep Wizard](https://blog-multistep-wizard.vercel.app?_vercel_share=h4KYlvWrLHFZTZtjAqklJnkb2XlSqHhg)

## Features
- Multi-step create wizard with **inline validation** (on next-attempt) and a **sectioned Review** step with “Edit” jump-backs.
- Pastel-brown Tailwind theme; **DRY UI implementation**.
- Homepage list (cards) → **View Details** page.
- **Global 404** (`app/not-found.tsx`).
- Client-side persistence (no backend): posts saved in `localStorage`.

## Stack
- Next.js (App Router) + TypeScript
- Tailwind CSS
- Local state/context providers

## Getting Started
```bash
# Install
npm i

# Dev
npm run dev
# http://localhost:3000

# Build & run
npm run build
npm run start
```

## Useful Paths

- `app/page.tsx` - homepage
- `app/new-post.tsx` - multi-step wizard page
- `app/blog/[id]/page.tsx` - post detail page
- `app/not-found.tsx` - global 404
- `components/ui*` - reusable UI
- `context/*` - BlogProvider, MultiStepProvider
- `utils/*` - Function helpers
