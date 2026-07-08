# SPEC — utalpha.com

## 概要

静的サイトを Cloudflare 上で運営する。

## インフラ

| 項目 | 内容 |
|---|---|
| ホスティング | Cloudflare Workers(静的サイト配信) |
| ドメイン | `utalpha.com`(候補)— Cloudflare Registrar で取得予定 |
| メール | Cloudflare Email Routing で問い合わせ用アドレスを作成 |
| 初期費用見込み | 年間 約1,600円(ドメイン代) |

## サイト構成

未定(検討中)。決まり次第ここに追記する。

## 決定事項ログ

- 2026-07-09: Cloudflare Workers + Registrar + Email Routing の構成に決定。ドメイン候補は utalpha.com
