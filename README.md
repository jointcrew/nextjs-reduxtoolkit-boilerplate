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
├── components // View: 純粋な見た目のコンポーネント/原則ステートは持たない
├── containers // Controller: データ操作/状態管理/依存関係/ライフサイクル制御/スタイルやViewは一切持たない
├── pages // 公開ページ
├── public // 静的公開ファイル
├── store // グローバルな状態管理（Model）
├── services // モデル操作・APIクライアント
├── styles // 共通スタイル
├── types // 型定義ファイル(型定義は全てここで管理)
├── hooks // カスタムHooks
└── utils // 共通に利用する純粋関数


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
- `redux-observable | WARNING: this middleware is already associated with a store. createEpicMiddleware should be called for every store.` の解消
- `4. WrappedApp created new store with withRedux(WrappedApp) { initialState: undefined,
  initialStateFromGSPorGSSR: undefined }` の解消
  - どちらもリロードすると出る
  - 見てる：https://github.com/redux-observable/redux-observable/issues/635
  - 見てる：https://github.com/redux-observable/redux-observable/pull/539
- リセットスタイルの適用
- テストの導入
  - UT: jest
  - VRT: [Storybook](https://storybook.js.org/docs/testing/automated-visual-testing/)
  - E2E: [Cypress](https://www.cypress.io/)
