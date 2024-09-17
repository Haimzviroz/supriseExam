//צור קובץ TS, וכתוב פונקציה שמקבלת מערך של מספרים ומחזירה את סכומם
function sumOfArray(arr: number[]): number {
  let ans: number = 0;
  arr.forEach((element) => {
    ans += element;
  });
  return ans;
}
const a = [1, 2, 3];
console.log(sumOfArray(a));
