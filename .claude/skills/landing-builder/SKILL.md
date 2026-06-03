---
name: landing-builder
description: Scaffold and deploy production-grade landing pages with WOW-effect design. Use when asked to create a landing page, лендинг, or any promotional single-page site. Covers full workflow: design direction → Vite+React scaffold → components → Framer Motion animations → Vercel deploy.
---

# Landing Builder Skill

Ты создаёшь лендинги, которые запоминаются. Не шаблоны — произведения.

## Входные данные от пользователя
Минимум что нужно знать перед стартом:
- **Название / продукт** — что продаём или презентуем
- **Аудитория** — кто смотрит
- **Тон** — если не указан, выбери сам исходя из продукта

Всё остальное додумывай сам. Не задавай лишних вопросов.

## Шаг 1 — Визуальное направление

Выбери одно слово-направление и зафиксируй его:

| Направление | Характер |
|-------------|----------|
| `brutal` | Жирная типографика, контраст, сырость |
| `luxury` | Тонкие линии, золото/кремовый, утончённость |
| `cyber` | Тёмный фон, неон, glitch-эффекты |
| `editorial` | Magazine-layout, асимметрия, editorial fonts |
| `organic` | Мягкие формы, природные цвета, плавность |
| `minimal` | Воздух, одна доминирующая деталь |
| `retro` | Зернистость, vintage палитра, ностальгия |

**Правило:** никогда не используй одно направление дважды подряд для разных проектов.

## Шаг 2 — Scaffold

```bash
npm create vite@latest {project-name} -- --template react
cd {project-name}
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm install framer-motion
```

`tailwind.config.js`:
```js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'DISPLAY_FONT'", "serif"],
        body: ["'BODY_FONT'", "sans-serif"],
      },
      colors: {
        primary: "var(--color-primary)",
        accent: "var(--color-accent)",
        bg: "var(--color-bg)",
      },
    },
  },
}
```

## Шаг 3 — CSS переменные

В `src/index.css` всегда определяй:
```css
:root {
  --color-bg: /* фон */;
  --color-primary: /* основной текст */;
  --color-accent: /* акцент */;
  --color-muted: /* второстепенный */;
}
```

## Шаг 4 — Структура компонентов

```
src/components/
├── Hero.jsx          # Первый экран — самый важный
├── Features.jsx      # Преимущества / блоки
├── About.jsx         # О продукте / команде (опционально)
├── CTA.jsx           # Призыв к действию
├── Footer.jsx        # Контакты, ссылки
└── ui/
    ├── Button.jsx
    └── AnimatedText.jsx
```

## Шаг 5 — Hero (обязательные элементы)

Hero должен содержать:
- Headline — максимально крупный, запоминающийся
- Subline — одна строка, суть продукта
- CTA кнопка
- Визуальный якорь (фоновый эффект, градиент, геометрия, видео)
- Анимация входа через Framer Motion

```jsx
import { motion } from "framer-motion"

const Hero = () => (
  <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
    {/* Фоновый эффект */}
    <div className="absolute inset-0 bg-[var(--color-bg)]">
      {/* noise texture / gradient mesh / geometric shapes */}
    </div>

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative z-10 text-center px-6"
    >
      <h1 className="font-display text-[clamp(3rem,10vw,9rem)] leading-none tracking-tight">
        {headline}
      </h1>
      <p className="font-body text-[var(--color-muted)] mt-4 text-xl max-w-xl mx-auto">
        {subline}
      </p>
      <Button className="mt-8">{cta}</Button>
    </motion.div>
  </section>
)
```

## Шаг 6 — Scroll animations

Используй для каждой секции:
```jsx
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const Section = ({ children }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}
```

## Шаг 7 — Типографика

Всегда используй Google Fonts или другие нестандартные шрифты. Примеры по направлениям:

| Направление | Display | Body |
|-------------|---------|------|
| brutal | Bebas Neue, Anton | DM Sans |
| luxury | Cormorant Garamond | Jost |
| cyber | Orbitron, Exo 2 | Share Tech Mono |
| editorial | Playfair Display | Libre Baskerville |
| organic | Lora | Nunito |
| minimal | Neue Haas Grotesk | Inter (исключение) |
| retro | Abril Fatface | Courier Prime |

**Никогда:** Inter как display-шрифт, Arial, Roboto.

## Шаг 8 — Deploy

```bash
# Через MCP vercel
vercel deploy --prod
```

Или команда в сессии:
```
Задеплой через vercel MCP в продакшн
```

## Чеклист перед деплоем
- [ ] Mobile: проверь на 375px
- [ ] Все анимации работают
- [ ] CTA кнопка ведёт куда нужно
- [ ] Meta title и description заполнены в index.html
- [ ] Нет console.error в браузере
- [ ] Шрифты загружаются (не fallback)

## Запреты
- Не используй purple gradient на белом фоне
- Не используй стоковые иллюстрации (unsplash — можно, но осторожно)
- Не делай одинаковые лендинги — каждый уникален
- Не забывай про overflow-hidden на секциях с анимациями
