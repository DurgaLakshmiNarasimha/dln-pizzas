# 🍕 DLN Pizzas Shop — Website

Premium pizza restaurant website built with **React + Vite + Tailwind CSS**.

---

## 🚀 Quick Start (VS Code)

### Step 1 — Install dependencies
```bash
npm install
```

### Step 2 — Start development server
```bash
npm run dev
```

### Step 3 — Open in browser
```
http://localhost:5173
```

---

## 📁 Project Structure

```
dln-pizzas/
├── public/
│   └── pizza-icon.svg
├── src/
│   ├── assets/
│   │   └── owner.jpeg          ← Your photo (already added!)
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Menu.jsx
│   │   ├── PizzaCard.jsx
│   │   ├── About.jsx
│   │   ├── Reviews.jsx
│   │   ├── Location.jsx
│   │   ├── Cart.jsx
│   │   ├── Footer.jsx
│   │   └── WhatsAppFloat.jsx
│   ├── data/
│   │   └── pizzas.js           ← All pizza menu data
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

---

## ✏️ How to Edit

### Change WhatsApp number
Search for `919392779349` across the project and replace with your number:
- `src/components/Navbar.jsx`
- `src/components/Hero.jsx`
- `src/components/Location.jsx`
- `src/components/Cart.jsx`
- `src/components/Footer.jsx`
- `src/components/WhatsAppFloat.jsx`

### Change Google Maps embed
In `src/components/Location.jsx`, replace `MAPS_EMBED` const with your Google Maps embed URL.

### Add/edit pizzas
Edit `src/data/pizzas.js` — add/remove items from the `pizzas` array.

### Change contact details
Edit `src/components/Footer.jsx` and `src/components/Location.jsx`.

---

## 🏗️ Build for Production
```bash
npm run build
```
Output will be in `dist/` folder — ready to deploy!

---

## 🌐 Deploy Options
- **Vercel**: `npm i -g vercel && vercel`
- **Netlify**: Drag `dist/` folder to netlify.com
- **Railway**: Connect GitHub repo

---

Made with ❤️ for DLN Pizzas Shop, Dharmavaram, AP
