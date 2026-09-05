# Multi-Language News Reader (i18n)

A responsive multi-language news reading portal demonstrating native HTML5 **internationalization (i18n)**, dynamic **Right-to-Left (RTL)** script rendering, bi-directional text isolation (`<bdi>`), and CSS logical properties.

---

## 🎯 Project Goal

Learn how search engines and modern web browsers handle globalized multi-language web apps without relies on heavy third-party translation packages.

---

## 🛠️ Tech Stack

- **HTML5** (`lang`, `dir="rtl/ltr"`, `<bdi>`, `<bdo>`, `<time>`)
- **CSS3** (CSS Logical Properties like `border-inline-start`, `padding-inline`)
- **Vanilla JavaScript** (DOM manipulation for language switching)

---

## 📁 Project Structure

```text
multi-lang-news/
├── index.html      # Article markup with i18n attributes
├── style.css       # Direction-agnostic CSS layout
├── script.js       # Dictionary mapping & document attributes toggle
└── README.md       # Project documentation