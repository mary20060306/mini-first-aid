# MINI — Trilingual First-Aid Product Questionnaire

A modern responsive questionnaire in **English, French and Arabic (RTL)** for validating the MINI everyday first-aid product concept.

## New in this version

- 🌙 Crescent-and-star brand mark instead of a medical cross
- Online response storage with **Supabase**
- Secure public **insert-only** database policy using RLS
- PDF export of each completed response
- Local fallback when Supabase is not configured or temporarily unavailable
- Responsive mobile/desktop design

## Quick start

Open `index.html` locally for demo mode, or publish the folder to GitHub Pages.

To enable online collection, follow `SETUP.md` and put your Supabase Project URL + Publishable key in `script.js`.

## Important security note

Only use a Supabase **Publishable key** in browser code. Never expose a Supabase Secret / service_role key in GitHub Pages or any frontend file.

The database policy only lets public visitors insert questionnaire responses; it does not give them permission to read the response table.
