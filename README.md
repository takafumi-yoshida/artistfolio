# README

#### artistfolio

### URL 
http://18.177.222.221/

### テストアカウントのID及びpassword
- ID(email): a@a.a
- password：aaaaaaaa

### ログイン時のサンプル画像
<!-- - トップページ
![トップページ](https://user-images.githubusercontent.com/59679612/77407844-24826b80-6dfa-11ea-9886-d2d0ce670d38.png)
- 日記投稿ページ
![日記投稿ページ](https://user-images.githubusercontent.com/59679612/77409389-8643d500-6dfc-11ea-89da-c75cc1f7f25b.png)
- 日記一覧ページ
![日記一覧ページ](https://user-images.githubusercontent.com/59679612/77407954-5693cd80-6dfa-11ea-84b7-eeac34383903.png)
- マイページ
![マイページ](https://user-images.githubusercontent.com/59679612/77408024-6e6b5180-6dfa-11ea-81d2-49bca9d4a32b.png) -->
# 特徴

- 自分の作品が手軽に投稿できる。他人の作品を手軽に楽しめる。
- 全てのユーザーをアーティストとして迎いいれる。

# 制作背景

- 私の知り合いに芸大生がいます。先日、その芸大生に作品を見せて欲しいとお願いしたところ、『私の作品は上手くないし、恥ずかしいから。』と言われて断られました。
それに対して、私はものすごくもったいないなと感じました。一生懸命作って、きっと彼女の本心は『誰かにみて貰いたいけれど、恥ずかしい。』ということなのではないかと私は思いました。実際、彼女の別の作品を観てみてもすごく素晴らしい物だと私は感じたのです。しかし。彼女はすごく謙虚で恥ずかしがり屋なのです。
私は彼女のような人が世の中に五万といると思っています。私はそういう人に使って頂きたいという思いからこのアプリケーションの開発をはじめました。このアプリケーションではアーティストとして本名ではなくアーティスト名で登録して頂きます。また、本名で活動したい人のためにも本名のform欄も設けております。
このアプリケーションは技術どうこうに関わらずどのユーザーもアーティストとして自分のポートフォリオのようなページを持ち、ギャラリーには作品を出展できます。そして、それを他のユーザーにみてもらうことができます。

# 実装機能

## 実装済み
- 新規登録、ログイン（devise）
- ユーザー編集

## 未実装（只今、開発中）
- Gallery 投稿・編集・削除 
- コメント 投稿・編集・削除 (Galleryに対して)
- News 投稿・編集・削除
- Contact機能

## その他（検討中）
- artistフォロー機能
- 作品お気に入り機能
- 作品評価機能

# テーブルの種類

##  user table
|Column|Type|Options|
|------|----|-------|
|artistname|string|null:false,unique:true|
|email|string|null:false,unique:true|
|realname|string|
|age|integer|
|profession|string|
|birthplace|string|
|activityBase|string|
|introduction|text|
|image|string|
### Association
- has_many :galleries
- has_many :comments
- has_many :news
- has_many :user_contacts
- has_many :contacts, through :user_contacts
- has_many :messages

## galleries table
|Column|Type|Options|
|------|----|-------|
|title|string|null:false|
|explanatory|text|
|user_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :user
- has_many :gallery_images
- has_many :comments


## comments table
|Column|Type|Options|
|------|----|-------|
|content|string|null:false|
|user_id|integer|null: false, foreign_key: true|
|item_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :item

## gallery_images table
|Column|Type|Options|
|------|----|-------|
|image|string|null: false, foreign_key: true|
|gallery_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :gallery

## news
|Column|Type|Options|
|------|----|-------|
|contents|text|null: false|
|item_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :user

## contacts
|Column|Type|Options|
|------|----|-------|
|user_id|integer|foreign_key: true|
|contact_id|integer|foreign_key: true|
### Association
- belongs_to :masseage
- has_many :user_contacts
- has_many :users, through :user_contacts

## user_contacts
|Column|Type|Options|
|------|----|-------|
|user_id|integer|foreign_key: true|
|contact_id|integer|foreign_key: true|
### Association
- belongs_to :user
- belongs_to :contact

## user_contacts
|Column|Type|Options|
|------|----|-------|
|user_id|integer|foreign_key: true|
|contact_id|integer|foreign_key: true|
### Association
- belongs_to :user
- belongs_to :contact

## messages
|Column|Type|Options|
|------|----|-------|
|contants|integer|foreign_key: true|
|user_id|integer|foreign_key: true|
|contact_id|integer|foreign_key: true|
### Association
- belongs_to :user
- belongs_to :contact
