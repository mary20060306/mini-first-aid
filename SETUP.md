# MINI Questionnaire — Online responses + PDF

This version keeps the questionnaire on GitHub Pages and uses **Supabase** to store answers online.

## 1) Create the database table

1. Open your Supabase project.
2. Open **SQL Editor**.
3. Paste everything from `supabase.sql`.
4. Run it.

The table is called `responses`.

The public questionnaire is allowed to **insert** a response, but it is not allowed to read other people's responses. This is enforced with Row Level Security (RLS).

## 2) Get your Supabase values

In Supabase, open the project's connection/API area and copy:

- Project URL
- Publishable key

Then open `script.js` and replace:

```js
const SUPABASE_URL = "YOUR_SUPABASE_PROJECT_URL";
const SUPABASE_PUBLISHABLE_KEY = "YOUR_SUPABASE_PUBLISHABLE_KEY";
```

Do **not** put a `service_role` or secret key in `script.js` or GitHub Pages.

## 3) Test the questionnaire

Open `index.html` in a browser or publish the repo on GitHub Pages.

Submit a test response.

Then in Supabase:

**Table Editor → responses**

You should see a new row.

## 4) PDF

After submitting, the respondent can click **Download this response as PDF / Télécharger la réponse en PDF / تحميل الإجابة بصيغة PDF**.

The PDF contains the complete questionnaire response in the selected language.

## 5) GitHub Pages

GitHub Pages can host the static HTML/CSS/JS files.

Recommended repo files:

- `index.html`
- `style.css`
- `script.js`
- `supabase.sql`
- `SETUP.md`
- `README.md`

Push them to a GitHub repository and enable **GitHub Pages** from that repository's settings.

## 6) How you receive answers

You do not receive one email per answer in this first version.

Instead, every submission is stored as one row in Supabase:

```text
responses
  ├── id
  ├── created_at
  ├── submitted_at
  ├── language
  ├── answers (JSON)
  └── source
```

Later, we can add an **admin dashboard** that shows statistics and lets you open any response and download its PDF.

We can also add automatic email notifications after the database part is stable.
