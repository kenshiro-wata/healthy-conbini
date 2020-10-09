## Name
**コンビニで健康管理**

## 概要
このアプリはコンビニで食事を済ませる忙しい方向けのものになります。
また、今回はデモであり実際は各コンビニアプリ内での機能として想定しています。

## 説明
コンビニの食事でもしっかりと健康を保てるように健康管理をサポートするのがこのアプリの役目になります。なにかと忙しい現代において「食事はコンビニで軽く済ませてまた仕事、、、」なんて方も多いのではないでしょうか。自分が買う商品の栄養素をグラフで表示し、視覚的に栄養バランスを確かめることができればより簡単に健康管理ができるはずです。
また、企業側の視点に立つとお客様ごとの栄養管理データを持つことでパーソナライズした商品提案や商品の促販にも役立てることができるはずです。

## デモ
![コンビニで健康管理](https://user-images.githubusercontent.com/44572513/95405215-2d7bfa00-0952-11eb-9ee0-b9572d9f5508.gif)

<h2 align="center">コンビニで健康管理</h2>

## App URL
 
## 使い方
1. 新規アカウント登録
2. 商品を選択
3. グラフで栄養バランスを確認
4. 価格と総カロリーを確かめたら購入ボタンをクリック
5. トップページにて購入履歴が表示される

## 実装機能
- ログイン機能
  - 購入履歴をユーザーごとに管理する
- 商品選択機能
  - 購入を前提としたアプリケーションのため
- 商品購入機能
  - 購入を前提としたアプリケーションのため
- 購入履歴表示機能
  - 過去の食事傾向を可視化するため

## 実装予定の機能
- 購入履歴の詳細表示機能
  - 過去の食事の詳細を知るため
- 商品のレコメンド機能
  - 栄養素の偏りに応じて商品の提案をするため

## データベース設計

## users テーブル

| Column                    | Type   | Options     |
| ------------------------- | ------ | ----------- |
| name                      | string | null: false |
| email                     | string | null: false |
| password                  | string | null: false |

### Association

- has_many :user_orders
- has_many :orders, through: :user_orders

## orders テーブル

| Column              | Type       | Options     |
| ------------------- | ---------- | ----------- |
| price               | integer    | null: false |
| kcal                | integer    | null: false |
| user                | references | null: false, foreign_key: true |

### Association

- has_many :user_orders
- has_many :user, through: :user_orders
- belongs_to_active_hash :onigiri
- belongs_to_active_hash :bento
- belongs_to_active_hash :bread
- belongs_to_active_hash :sweet_bread
- belongs_to_active_hash :sandwich
- belongs_to_active_hash :salad_soup
- belongs_to_active_hash :fry
- belongs_to_active_hash :dessert
- belongs_to_active_hash :drink

## user_orders テーブル

| Column              | Type       | Options     |
| ------------------- | ---------- | ----------- |
| user                | references | null: false, foreign_key: true |
| order                | references | null: false, foreign_key: true |

### Association

- belongs_to :user
= belongs_to :order

# ER図

![ER図](https://user-images.githubusercontent.com/44572513/95406003-4d142200-0954-11eb-8563-7daaed0e08a9.png)

## 使用環境

### バックエンド
Ruby '2.6.5'  
Ruby on Rails '6.0.3'

### フロントエンド
HTML  
SASS  
Bootstrap '4.3.1'  
Javascript  
jquery 3.5.1  
chart.js 2.9.3  

### データベース
MySQL 5.6.47

### Webサーバ(本番環境)
heroku

### アプリケーションサーバ（本番環境）
heroku

### ソース管理
GitHub,GitHubDesktop

### テスト
RSpec

### エディタ
VScode


