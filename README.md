# Портфолио — сайт-визитка

Одностраничный сайт с проектами, стеком и контактами.

## Деплой на сервер

Сайт доступен по адресу: **https://31-58-85-80.sslip.io/portfolio/**

После правок синхронизируй:

```bash
cp -r /root/portfolio/* /var/www/portfolio/
```


```bash
cd /root/portfolio
python3 -m http.server 8080
```

Открой http://localhost:8080

## Что настроить

1. В `index.html` замени `YOUR_USERNAME` на свой Telegram и GitHub
2. При желании — добавь имя в hero-секцию и favicon

## GitHub

Промпты для публикации проектов — в `GITHUB_PROMPTS.md`
