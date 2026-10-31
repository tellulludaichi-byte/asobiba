# utalpha.com ホームページプロジェクト

静的サイトを Cloudflare Workers でホスティングするプロジェクト。詳細な仕様は [SPEC.md](SPEC.md) を参照。

## 方針

- 静的サイト(素の HTML/CSS/JS。フレームワーク・ビルドツールなし)
- ホスティング: Cloudflare Workers(`utalpha.com` で公開済み)
- デプロイ: `npx wrangler deploy`(`public/` の中身がそのまま公開される)
- 大きな決定は SPEC.md に追記していく
- 公開したくないものは `public/` に置かない(内部資料は `docs/`。git の管理外)。サークル名は承諾が取れたものだけ `circles-data.js` に書く

## 注意事項

- ドメイン取得・メール設定など Cloudflare 側の作業は手動で行う(コードからは触らない)
