# ⚡ Молния Коннект — База знаний

Главный репо-шаблон команды. Содержит CLAUDE.md, skills и лог всех лендингов.

## Структура

```
homeworkofmolniyaconnect/
├── CLAUDE.md                          # Инструкции для Claude Code
├── .claude/skills/landing-builder/    # Skill: генерация лендингов
├── index.html                         # Лендинг Молния Коннект
└── README.md                          # Этот файл
```

## Лог лендингов

| Дата | Проект | Репо | Направление | Стек | URL |
|------|--------|------|-------------|------|-----|
| 2026-06-03 | Молния Коннект — редизайн | `homeworkofmolniyaconnect` | cyber/energy | HTML + Three.js | [GitHub Pages](https://wazatake.github.io/homeworkofmolniyaconnect/) |

## Ключевые решения (cyber/energy направление)

- **Three.js r128** — particle field + lightning connections между точками + spark bolts
- **Fox parallax** — `mousemove` listener, `transform: translate(dx, dy)`, CSS glitch через `::before/::after` clip-path
- **Kinetic typography** — посимвольное появление через `setTimeout + classList.add('revealed')`
- **ROI Calculator** — 40% savings от ручных расходов, окупаемость по порогу 150k
- **Webhook rotation** — `ROTATION[]` массив, `Math.random()` выбор endpoint
- **Team avatars** — CSS gradient + инициалы, уникальный градиент для каждого
- **WebAudio visualizer** — `createAnalyser()`, frequency bars на canvas
- **Lightning border** на видео — `canvas` + `jagged edge` рандомизация

## Workflow для следующего лендинга

1. Получить задачу → определить направление одним словом
2. `mcp__github__create_repository` → новый репо `wazatake/{name}-landing`
3. Скопировать `.claude/` из этого репо
4. Scaffold + build + deploy через Vercel MCP
5. Добавить строку в таблицу выше
