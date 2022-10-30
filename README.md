# how-to-vite

ずっとCRAでSPAを作っていましたが、もはやあまり推奨されないようなのでViteでやってみた。

## やったことリスト
- Viteでプロジェクト作成
  - TypeScript + React
- react-routerでルーティング
  - `npm install react-dom-router`
  - /super-count ページを作成、遷移リンク
- sassの導入
  - `npm install sass`
  - すぐ使えた。便利
- 環境変数をどう読み込むか確認
  - `import.meta.env.XXX`
- 環境変数へのTypeScript型定義
  - `vite-env.d.ts`
- 本番ビルド方法の確認
  - `npm run build`
- index.htmlのタイトル置換方法の確認
  - これはViteの都合でまだ少し面倒なようなのでスキップ
  - https://github.com/vitejs/vite/issues/3105

## 感想
速い。便利。今後SPAならViteを使う。