# utalpha.com ホームページプロジェクト

静的サイトを Cloudflare Workers でホスティングするプロジェクト。詳細な仕様は [SPEC.md](SPEC.md) を参照。

## 方針

- 静的サイト(フレームワークは未定)
- ホスティング: Cloudflare Workers
- デプロイ: wrangler CLI を想定
- サイト構成・技術スタックは検討中。大きな決定は SPEC.md に追記していく

## 注意事項

- ドメイン取得・メール設定など Cloudflare 側の作業は手動で行う(コードからは触らない)
