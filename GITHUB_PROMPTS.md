# Промпты для публикации проектов на GitHub

Открой **тот же чат Cursor**, в котором делался проект, и отправь соответствующий промпт.
Агент знает контекст проекта и сделает всё аккуратнее, чем если начинать с нуля.

---

## На какие проекты стоит заливать на GitHub

### ✅ Обязательно (6 проектов — ядро портфолио)

| Проект | Папка | Зачем на GitHub |
|--------|-------|-----------------|
| **HabitCircle** | `habitcircle-bot` | Web App + групповая логика — сильный кейс |
| **Raschetka** | `raschetka-bot` | AI + Web App + практичный продукт |
| **Голос Путника** | `tarot-opora-bot` | Платежи ЮKassa — редкий навык |
| **AI Style Bot** | `ai-style-bot` | AI-генерация изображений (fal.ai) |
| **Дополни фразу** | `phrase-game-bot` | Игровая механика для групп |
| **Danetka AI** | `danetka-ai-bot` | AI-игра с каталогом загадок |

### ⚠️ По желанию

| Проект | Папка | Комментарий |
|--------|-------|-------------|
| **Tosno Vegetables** | `telegram.vegetables` | FastAPI + каталог + заказы, домен tosnoveg.ru — хороший веб-кейс |
| **МЕТПРОФ** | `midprof` | Коммерческий сайт клиента — **спроси разрешение** перед публикацией. Можно выложить как «demo» без контактов клиента |

### ❌ Не стоит (пока)

| Проект | Почему |
|--------|--------|
| **Степа Жидов** (`stepa-shop`) | Клиентский магазин с именем — без согласия не выкладывать |
| **Veg Shop** | Простой бот, мало отличается от других магазинов |
| **Strawberry Bot** | Минимальный функционал, не добавляет в портфолио |
| **veg-shop-bot** | Дублирует другие shop-боты |

---

## Общий промпт (если проект уже в git)

Используй для **phrase-game-bot** и **midprof** — у них git уже есть.

```
Подготовь этот проект к публикации на GitHub:

1. Проверь, что в репозитории нет секретов (.env, токены, ключи API, пароли, .db с пользователями)
2. Создай или дополни .gitignore (venv, __pycache__, .env, *.db, data/, temp/, node_modules)
3. Создай .env.example с описанием всех переменных без реальных значений
4. Напиши README.md на русском:
   - что делает проект (2-3 предложения)
   - скриншоты (оставь placeholder-пути, я добавлю позже)
   - стек технологий
   - как запустить локально (пошагово)
   - структура проекта (кратко)
5. Убери из кода захардкоженные секреты, если есть
6. Создай репозиторий на GitHub (public) и запушь

Мой GitHub username: YOUR_GITHUB_USERNAME
Название репозитория: НАЗВАНИЕ_РЕПО
```

---

## Промпты по проектам

### 1. HabitCircle — `habitcircle-bot`

```
Подготовь проект habitcircle-bot к публикации на GitHub как портфолио-кейс.

1. Инициализируй git, создай .gitignore (venv, __pycache__, .env, *.db, data/)
2. Создай .env.example: TELEGRAM_TOKEN, WEBAPP_URL и другие переменные из config
3. Напиши README.md на русском:
   - HabitCircle: личный трекер привычек + групповые задачи с назначением по @username
   - фичи: календарь, серии, роли (создатель/админ/участник), Mini App
   - стек: Python, aiogram 3, SQLite, Web App
   - быстрый старт и systemd-сервисы (описать, не включать реальные URL)
4. Убедись, что нет секретов и пользовательских данных в data/
5. Создай public-репозиторий habitcircle-bot на GitHub и запушь

GitHub username: YOUR_GITHUB_USERNAME
```

---

### 2. Raschetka — `raschetka-bot`

```
Подготовь проект raschetka-bot к публикации на GitHub.

1. Инициализируй git, .gitignore, .env.example (TELEGRAM_TOKEN, OPENAI_API_KEY, WEBAPP_URL и т.д.)
2. README.md на русском:
   - Raschetka: делёжка счетов и книга долгов в Telegram
   - фичи: ручной ввод долгов, AI-парсинг чеков, Web App, профили
   - стек: aiogram 3, OpenAI, SQLAlchemy, Web App
   - инструкция запуска
3. Проверь handlers/ai_debt.py и web/ — нет ли секретов
4. Public-репозиторий raschetka-bot, запушь

GitHub username: YOUR_GITHUB_USERNAME
```

---

### 3. Голос Путника — `tarot-opora-bot`

```
Подготовь tarot-opora-bot к публикации на GitHub.

ВАЖНО: это коммерческий бот с ЮKassa — не публикуй shop_id, secret_key, webhook URL.

1. Git init, .gitignore, .env.example (TELEGRAM_TOKEN, YOOKASSA_SHOP_ID, YOOKASSA_SECRET_KEY — только названия)
2. README.md:
   - «Голос Путника» — таро-бот с авторской колодой
   - фичи: карта дня, подписка, оплата через ЮKassa, webhook
   - стек: aiogram 3, aiohttp, aiosqlite, yookassa
   - как настроить webhook (общее описание, без реальных URL)
3. Убери YOOKASSA_WEBHOOK.txt и любые файлы с реальными ключами из коммита
4. Public-репозиторий tarot-opora-bot

GitHub username: YOUR_GITHUB_USERNAME
```

---

### 4. AI Style Bot — `ai-style-bot`

```
Подготовь ai-style-bot к публикации на GitHub.

1. Git init, .gitignore (venv, temp/, bot.db, .env)
2. .env.example: CLIENT_BOT_TOKEN, ADMIN_BOT_TOKEN, FAL_KEY
3. README.md:
   - AI Style Bot: перерисовка фото в стили через FLUX Kontext (fal.ai)
   - два бота: клиентский и админский
   - фичи: выбор стиля, кошелёк, style_prompts
   - стек: aiogram 3, fal-client, aiosqlite
4. temp/ и bot.db не коммитить
5. Public-репозиторий ai-style-bot

GitHub username: YOUR_GITHUB_USERNAME
```

---

### 5. Дополни фразу — `phrase-game-bot`

```
Подготовь phrase-game-bot к публикации на GitHub (git уже есть — проверь историю на секреты).

1. Проверь .gitignore и .env.example
2. Дополни README.md:
   - групповая игра «дополни фразу»
   - команды /play, /round, /vote, /score
   - механика: реплаи + опросы Telegram
   - стек: aiogram 3
3. Если в истории git были секреты — перепиши историю или создай новый репозиторий
4. Public-репозиторий phrase-game-bot

GitHub username: YOUR_GITHUB_USERNAME
```

---

### 6. Danetka AI — `danetka-ai-bot`

```
Подготовь danetka-ai-bot к публикации на GitHub.

1. Git init, .gitignore, .env.example (TELEGRAM_TOKEN, OPENAI_API_KEY, OPENAI_MODEL, DATABASE_URL)
2. README.md:
   - Danetka AI: игра «да-нет» с AI-ведущим
   - фичи: каталог загадок, подсказки, прогресс
   - стек: aiogram 3, OpenAI, SQLAlchemy, aiosqlite
3. data/danetka.db не коммитить (только seed-скрипт или пример)
4. Public-репозиторий danetka-ai-bot

GitHub username: YOUR_GITHUB_USERNAME
```

---

### 7. МЕТПРОФ (опционально) — `midprof`

```
Подготовь midprof к публикации на GitHub как портфолио-кейс.

ВАЖНО: это сайт клиента. Перед публикацией:
- замени реальные телефоны/email на placeholder или спроси у меня
- убери ИНН из meta-тегов, если я не разрешил публиковать

1. Проверь git-историю на секреты
2. README.md:
   - корпоративный сайт строительной компании
   - Flask, PWA-админка, календарь, адаптивная вёрстка
3. Public-репозиторий midprof-website (или другое нейтральное имя)

GitHub username: YOUR_GITHUB_USERNAME
```

---

### 8. Tosno Vegetables — `telegram.vegetables`

```
Подготовь telegram.vegetables к публикации на GitHub.

Сайт уже в проде: https://tosnoveg.ru (FastAPI + статика, заказы в Telegram).

1. Git init, .gitignore (venv, .env, __pycache__)
2. .env.example: TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID, SITE_NAME и остальное из config.py
3. README.md на русском:
   - интернет-магазин овощей с доставкой по Тосно
   - фичи: каталог, корзина, расчёт доставки, заказ в Telegram
   - стек: FastAPI, uvicorn, vanilla JS, nginx
   - как запустить локально
   - упомяни домен tosnoveg.ru как demo (без секретов)
4. deploy/ — оставить конфиги nginx/systemd как пример, без реальных токенов
5. Public-репозиторий tosno-vegetables

GitHub username: YOUR_GITHUB_USERNAME
```

---

## После публикации всех репозиториев

Отправь в **любом чате** (или здесь):

```
Создай GitHub Profile README для моего аккаунта YOUR_GITHUB_USERNAME:

- Кто я: разработчик Telegram-ботов, мини-приложений и сайтов
- Ссылки на репозитории: habitcircle-bot, raschetka-bot, tarot-opora-bot, ai-style-bot, phrase-game-bot, danetka-ai-bot
- Стек: Python, aiogram, Flask, OpenAI, fal.ai, ЮKassa
- Контакт: Telegram @YOUR_USERNAME
- На английском и русском (два блока)
```

---

## Чеклист перед каждым push

- [ ] `.env` в `.gitignore`
- [ ] `.env.example` создан
- [ ] Нет `.db` файлов с реальными пользователями
- [ ] Нет токенов в коде и истории git
- [ ] README с описанием и инструкцией запуска
- [ ] Репозиторий **public**

---

Замени `YOUR_GITHUB_USERNAME` на `lam1um` (или актуальный username) перед отправкой промптов.
