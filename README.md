# Marcos Landi – Personal Website

A clean, single‑page portfolio built with **Next.js 15**, **Tailwind CSS**, and **TypeScript**.

---

## ✨ Key Features
| Feature | Description |
|---------|-------------|
| **Next.js App Router** | Modern routing, server components, and fast refresh. |
| **Tailwind & Liquid‑Glass UI** | Glass‑like cards and utility‑first styling for rapid tweaks. |
| **TypeScript** | End‑to‑end type safety. |
| **Animated Gradient Background** | Subtle motion for a polished feel. |
| **Contact Form** | Sends submissions to your API endpoint. |
| **Ready‑to‑extend MVP** | Add pages or components as your portfolio grows. |

---

## 🛠️ Quickstart

```bash
git clone https://github.com/your-handle/marcos-landi-site.git
cd marcos-landi-site
npm install      # or pnpm / yarn
npm run dev      # open http://localhost:3000
```

### Production Build

```bash
npm run build    # Compile for production
npm start        # Serve on port 3000
```

> **Static export**: `next export` outputs an **/out** folder ready for static hosts (Cloudflare Pages, Netlify, S3).

---

## 🚀 Deployment Options

| Host | Notes |
|------|-------|
| **Vercel** | Zero‑config—push to GitHub and deploy. |
| **Cloudflare Pages** | Export statically or use *next‑on‑pages* for dynamic routes. |
| **Any Node host** | `npm run build && npm start`. |

---

## 🔗 API Endpoint

```http
POST https://marcos-landi-api.onrender.com/api/contact
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "phoneNumber": 5551234,
  "message": "Hello, I'd like a custom landing page."
}
```

---

## 📁 Project Structure

```
marcos-landi-site/
├─ app/               # Next.js pages (App Router)
│  ├─ page.tsx        # Hero + Contact
│  └─ layout.tsx      # HTML shell
├─ styles/            # Tailwind globals
├─ public/            # Static assets (favicon, images)
├─ .next/             # Build output (after npm run build)
└─ README.md
```

---

## 🤝 Contributing

Pull requests welcome. Please keep code tidy and write helpful commit messages.

---

## 🎞️ Thank you!

<img width="100%" src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjQ3YWJ0dnV5cDZ1NWU1M2hka3RnZzVhaHdob3dyaDBlOG10bW5uNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/CkzASXWphfkQ5CF6ny/giphy.gif"/>
