//年、月、日のデータ取得
const date = new Date();
const [year, month, day] = [
  date.getFullYear(),
  date.getMonth(),
  date.getDate(),
];


//取得したデータをConsoleへ出力
console.log(year+"年", month+"月", day+"日");