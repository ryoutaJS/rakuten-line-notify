# 楽天価格通知アプリ

## 概要

個人開発で楽天価格通知アプリ（web）を作りました。

- [サイトの URL](https://rakuten-line-notify.vercel.app/)

このアプリは自分が**ほしいものリスト**に追加した楽天の商品がセールなどで安くなったら、LINE 通知してくれる web アプリケーションです。

## 想定ユーザー

自分用に作ったのでユーザーは自分だけです。
なので今のところ認証機能はありません。

## 使用技術

#### フロントエンド

- TypeScript `4.5.4`
- Next.js `14.0.4`
- MUI `5.15.20`

#### バックエンド

- Python `3.12`

#### インフラ

- Docker
- AWS
  - Lambda
    - LINE 通知処理やほしいものリストの CRUD 処理で使用
  - API Gateway
    - API の作成と管理や Lambda 関数との連携で使用
  - DynamoDB
    - 楽天の商品データの格納で使用
  - CloudWatch
    - ログ出力で使用
  - EventBridge
    - 指定した日時に LINE 通知の Lambda を実行するために使用
  - Secrets Manager
    - 外部 API のアクセスキーの管理で使用
  - CloudFormation
    - インフラのコード化で使用

#### 外部 API

- LINE Notify API
  - LINE 通知を送るために使用
- 楽天市場 API
  - 楽天の商品データを取得するために使用

#### CI / CD

- GitHub Actions

  - Vitest
  - pytest

#### 実行環境

- Vercel

## 画面イメージ

### トップページ

1. 楽天商品の**ほしいものリスト**を表示

<img width="1920" alt="トップページ" src="https://github.com/user-attachments/assets/41552e29-6d22-456f-93f0-aba2dc0a8e47">

### ほしいものリストに商品を追加

1. ＋ボタンクリックでモーダル画面を表示
2. 楽天の商品をキーワード検索
3. 検索結果の中から好きな商品を選択して**ほしいものリスト**に追加

![商品追加](https://github.com/user-attachments/assets/422a3821-cf4c-4969-9aa8-5ac177c0a72f)

### ほしいものリストから商品を削除

1. **ほしいものリスト**の中から削除したい商品を選択
2. 確認ダイアログで OK ボタンクリックで**ほしいものリスト**から削除

![商品削除](https://github.com/user-attachments/assets/e42f0e11-2b2a-4c80-abdb-accea3ab69ce)

### お買い得情報 LINE 通知

1. 毎日お昼 12 時に**ほしいものリスト**の商品価格をチェック
2. お買い得になっていたら LINE 通知が届く

![LINE通知](https://github.com/user-attachments/assets/31707f05-b8f2-48d9-a467-265e9ed0e8bc)

## システム構成図

![システム構成図](https://github.com/user-attachments/assets/b16f2c41-7fab-4831-889a-50320209f4fe)

ざっくり説明すると

- フレームワークは Next.js
- UI ライブラリは MUI
- ホスティングは Vercel
- データ管理やバッチ処理は AWS
- 商品データは楽天市場 API から
- LINE 通知は LINE Notify API

## インフラ構成図

![インフラ構成図](https://github.com/user-attachments/assets/dd5e240c-c920-4fc2-8f23-70af0fb22847)

## 商品テーブル

| 項目名              | データ型     |
| ------------------- | ------------ |
| **itemCode**        | String       |
| **itemName**        | String       |
| **itemPrice**       | Number       |
| **itemUrl**         | String       |
| **mediumImageUrls** | List of Maps |
| **createdAt**       | String       |

## 機能一覧

- ほしいものリスト表示
- ほしいものリスト追加
- ほしいものリスト削除
- モーダル画面表示
- 楽天商品の検索機能
- LINE 通知機能
