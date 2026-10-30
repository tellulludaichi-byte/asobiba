// イベント・活動データ
//
// ■ 今後のイベントを追加する
//   UPCOMING_EVENTS に1ブロック追加すればトップの「イベント情報」に載ります。
//   終わったイベントはブロックごと削除して、写真があれば PAST_ACTIVITIES に追加してください。
//   イベントが1件もないときは「現在告知中のイベントはありません」と自動で表示されます。
//
// ■ 今までの活動(過去のイベント)を追加する
//   PAST_ACTIVITIES の先頭に1行追加すれば載ります(新しい順)。
//   トップページには先頭から最新6件だけが表示され、全件は /events(過去のイベント一覧ページ)で見られます。
//   写真は public/images/ に入れて、ファイル名は半角英数字にすること。
//   src(写真)は任意。まだ写真がないときは date と title だけの行にしておけば、
//   写真待ちの空き箱として表示されます。写真が届いたら src / alt を追記してください。

const UPCOMING_EVENTS = [
  // 例(コピーして使う):
  // {
  //   badge: "7/9(木)開催",
  //   title: "ギャルAIを作る会 — AI実験イベント",
  //   description: "イベントの紹介文。",
  //   details: [
  //     ["日時", "7/9(木)19:00–21:00"],
  //     ["場所", "UTラボ(本郷キャンパス近く/キャンパス外)"],
  //     ["参加費", "無料"],
  //   ],
  //   flyers: [
  //     { src: "images/flyer-0709-gyaru-ai-1.jpg", alt: "フライヤーの説明" },
  //   ],
  //   note: "補足があれば。なければこの行ごと削除",
  // },
];

const PAST_ACTIVITIES = [
  { date: "9/25", title: "知らないトランプゲーム会", src: "images/event-0925-card-game.jpg", alt: "知らないトランプゲーム会の様子" },
  { date: "9/10", title: "アートバー企画 vol.1", src: "images/event-0910-art-bar.jpg", alt: "アートバー企画 vol.1 の様子" },
  { date: "9/1", title: "LT会" },
  { date: "8/25", title: "うどん会", src: "images/event-0825-udon.jpg", alt: "うどん会で作ったすだち入りのうどん" },
  { date: "8/19", title: "ポケモン会", src: "images/event-0819-pokemon-1.jpg", alt: "ポケモンのぬいぐるみを持って集まったポケモン会の集合写真" },
  { date: "8/19", title: "ポケモン会 UT LAB にて", src: "images/event-0819-pokemon-2.jpg", alt: "UT LAB でポーズをとるポケモン会のメンバー" },
  { date: "7/9", title: "ギャルAIを作る会", src: "images/event-0709-gyaru-ai-2.jpg", alt: "ギャルAIを作る会の集合写真" },
  { date: "7/9", title: "ギャルAIを作る会 発表の様子", src: "images/event-0709-gyaru-ai-1.jpg", alt: "ギャルマインドについて発表するメンバー" },
  { date: "6/21", title: "サッカー観戦会", src: "images/event-0621-soccer-2.jpg", alt: "サッカー観戦会でくつろぐメンバー" },
  { date: "6/8", title: "第3回交流会", src: "images/event-0608-third.jpg", alt: "カフェで談笑する第3回交流会の様子" },
  { date: "6/7", title: "第2回交流会", src: "images/event-0607-second.jpg", alt: "第2回交流会の集合写真" },
  { date: "6/1", title: "キックオフ交流会", src: "images/event-0601-kickoff.jpg", alt: "カフェで開かれた第1回交流会の様子" },
];
