//年、月、日のデータ取得
const date = new Date();
const [year, month, day] = [
  date.getFullYear(),
  date.getMonth()+1, //月は0から11で表現されるため、+1して補正
  date.getDate(),
];


//取得したデータをConsoleへ出力
console.log(year+"年", month+"月", day+"日");