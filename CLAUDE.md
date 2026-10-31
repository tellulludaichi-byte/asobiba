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

## 再開時のやること(2026-10-31 時点)

- [ ] GitHub に公開する: 運営メンバーの許諾は取得済み。次の手順で進める
  1. GitHub で空の非公開リポジトリを作る(README・.gitignore・ライセンスは追加しない)
  2. リポジトリの URL を Claude に伝えて `git push`
  3. GitHub 上で中身を確認し、問題なければ Settings → General → Danger Zone で Public に切り替える
- [ ] README に「工夫した点・苦労した点」を足す(就活で見せるため。実際の経緯を聞いてから書く)
- [ ] 問い合わせ用メールの受信確認と、お問い合わせページに載せるアドレスの見直し、送信元認証(DKIM)の設定
- [ ] 承諾が取れたサークルを `circles-data.js` に `approved: true` で追記する
- [ ] 掲載期限を過ぎたイベントを、写真つきで `PAST_ACTIVITIES` に追加する(自動では移らない)

非公開のメモ(後片付けなど)は `docs/TODO-private.md`(git の管理外)にある。
