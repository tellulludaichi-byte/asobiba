// 掲載期限(until)を過ぎたものを、ページを開いた時点の日付(日本時間)で取り下げる。
//
// ■ 使い方
//   HTML の要素に data-until="2026-11-03" を付けると、その日の翌日以降は表示されなくなる(当日までは表示)。
//   events-data.js の UPCOMING_EVENTS も、until: "2026-11-03" を付ければ同じ扱いになる(isExpired を使用)。
//   日付はサイトを開いた人の端末の時計ではなく、日本時間で判定する。

const TODAY_JST = new Date().toLocaleDateString("sv-SE", { timeZone: "Asia/Tokyo" });

// until は "YYYY-MM-DD"。その日の終わりまでは表示し、翌日から取り下げる
function isExpired(until) {
  return Boolean(until) && until < TODAY_JST;
}

for (const el of document.querySelectorAll("[data-until]")) {
  if (isExpired(el.dataset.until)) el.remove();
}
