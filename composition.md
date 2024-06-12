# 構成

## 技術
### フロントエンド
- Next.js(React)
- 状態管理
  - React Hooks
- UIライブラリ
  - MUI(Material-UI)
  - https://mui.com/
- 実行環境
  - Vercel

### バックエンド
- AWS
  - Lambda
    - バックエンドの処理で使用
  - API Gateway
    - APIの作成と管理やLambda関数との連携で使用
  - dynamoDB
    - 楽天の商品データを格納するために使用
  - EventBridge
    - 指定した日時に金額比較のLambda関数を実行するために使用
  - CloudWatch
    - ログ出力で使用
- 楽天市場API
  - 楽天の商品データを取得するために使用
  - https://webservice.rakuten.co.jp/
- LINE Notify API
  - LINE通知するために使用
  - https://notify-bot.line.me/ja/