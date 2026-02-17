# discord-bot-1st-how-many-days-left-in-this-year

毎朝 7:22（JST）に、今年の残り日数を Discord に投稿する Bot です。

## 仕組み

- GitHub Actions の Cron スケジューラで毎日自動実行
- Discord Webhook を使ってチャンネルに投稿
- 追加パッケージ不要（Node.js 標準の `fetch` を使用）

## セットアップ

### 1. Discord Webhook URL を取得

投稿したいチャンネルの設定 → 連携サービス → ウェブフック → 新しいウェブフック → URL をコピー

### 2. GitHub Secrets に登録

リポジトリの Settings → Secrets and variables → Actions → New repository secret

| Name | Value |
|------|-------|
| `DISCORD_WEBHOOK_URL` | 取得した Webhook URL |

### 3. ローカルでのテスト実行

```bash
DISCORD_WEBHOOK_URL="your_webhook_url" node index.js
```

## ライセンス

MIT
