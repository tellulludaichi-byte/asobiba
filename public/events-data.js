// イベント・活動データ
//
// ■ 今後のイベントを追加する
//   UPCOMING_EVENTS に1ブロック追加すればトップの「イベント情報」に載ります。
//   終わったイベントはブロックごと削除して、写真があれば PAST_ACTIVITIES に追加してください。
//   イベントが1件もないときは「現在告知中のイベントはありません」と自動で表示されます。
//
// ■ 今までの活動を追加する
//   PAST_ACTIVITIES の先頭に1行追加すればトップの「今までの活動」に載ります(新しい順)。
//   写真は public/images/ に入れて、ファイル名は半角英数字にすること。

const UPCOMING_EVENTS = [
  {
    badge: "7/9(木)開催",
    title: "ギャルAIを作る会 — AI実験イベント",
    description: "「理屈より、直感で生きよ」— AI に“ギャルマインド”を叩き込む実験イベント。Gemini を使って、自分だけのギャル人格 AI をプロンプトで設計します。",
    details: [
      ["日時", "7/9(木)19:00–21:00"],
      ["場所", "UTラボ(本郷キャンパス近く/キャンパス外)"],
      ["対象", "大学生ならどなたでも大歓迎!"],
      ["参加費", "無料"],
      ["定員", "20名(先着順)"],
    ],
    flyers: [
      { src: "images/flyer-0709-gyaru-ai-1.jpg", alt: "ギャルAIを作る会のフライヤー(表)" },
      { src: "images/flyer-0709-gyaru-ai-4.jpg", alt: "ギャルAIを作る会のフライヤー(申し込みQRコード付き)" },
    ],
    note: "申し込みはフライヤーの QR コードから。主催: 東大生の遊び場+α/協賛企業: CGOドットコム",
  },
];

const PAST_ACTIVITIES = [
  { date: "6/21", title: "サッカー観戦会", src: "images/event-0621-soccer-2.jpg", alt: "サッカー観戦会でくつろぐメンバー" },
  { date: "6/8", title: "第3回交流会", src: "images/event-0608-third.jpg", alt: "カフェで談笑する第3回交流会の様子" },
  { date: "6/7", title: "第2回交流会", src: "images/event-0607-second.jpg", alt: "第2回交流会の集合写真" },
  { date: "6/1", title: "キックオフ交流会", src: "images/event-0601-kickoff.jpg", alt: "カフェで開かれた第1回交流会の様子" },
];
