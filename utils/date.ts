const editNum = (num: number) => {
  if (num >= 0 && num <= 9) {
    return `0${num}`;
  }
  return num;
}
export const actualDate = () => {
  const date = new Date();

  const year = editNum(date.getFullYear())
  const month = editNum(date.getMonth() + 1)
  const day = editNum(date.getDate() - 7)

  return `${year}-${month}-${day}`
}

export function correctDate(strDate: string) {
  const date = new Date(strDate);
  return date.toLocaleDateString();
}
