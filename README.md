## セットアップ
```
yarn
```

## nextサーバ起動
```
yarn dev
```
open http://localhost:3000

## ディレクトリ
```
.
├── components // View: 原則ステートを持たない
├── containers // Controller: Atomicデザイン採用の場合は、organismsまでのコンテナ化を許容
├── pages // 公開ページ
├── public // 静的公開ファイル
├── store // グローバルな状態管理（Model）
├── services // モデル操作・APIクライアント
├── styles // 共通スタイル
├── types // 型定義ファイル(型定義は全てここで管理)
└── utils // 便利関数


```

## 補足
* 以下サンプルページ (削除予定)
```
pages/google-books.tsx
pages/index.tsx
```

## リンク
### ベースプロジェクト
* [with-typescript](https://github.com/vercel/next.js/tree/canary/examples/with-typescript)
* [with-redux-toolkit](https://github.com/vercel/next.js/tree/canary/examples/with-redux-toolkit)
* [with-redux-observable](https://github.com/vercel/next.js/blob/canary/examples/with-redux-observable)

### [next.js公式](https://nextjs.org/)


## TODO
- リセットスタイルの適用
- テストの導入
  - UT: jest
  - VRT: [Storybook](https://storybook.js.org/docs/testing/automated-visual-testing/)
  - E2E: [Cypress](https://www.cypress.io/)