# Let's Move Smarter Booking App

A clean Next.js App Router booking form for Let's Move Smarter, a moving tote rental business in Joplin, Missouri.

## Tech

- Next.js App Router
- TypeScript
- Tailwind CSS
- Supabase Postgres

## Structure

```text
app/page.tsx
app/layout.tsx
app/globals.css
components/BookingForm.tsx
lib/supabaseClient.ts
supabase/schema.sql
package.json
package-lock.json
next.config.js
postcss.config.js
tailwind.config.ts
tsconfig.json
eslint.config.mjs
.env.example
README.md
```

## Local Setup

```bash
npm install
npm run dev
```

Create `.env.local` from `.env.example`:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

Run `supabase/schema.sql` in the Supabase SQL editor before testing the form.

## Deploy on Vercel

1. Import this GitHub repository into Vercel.
2. Add `NEXT_PUBLIC_SUPABASE_URL`.
3. Add `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
4. Deploy.
