export const plural = (count: number, forms: string[]): string => {
  let idx: number

  if (count % 10 === 1 && count % 100 !== 11) {
    idx = 0 // one
  } else if (
    count % 10 >= 2 &&
    count % 10 <= 4 &&
    (count % 100 < 10 || count % 100 >= 20)
  ) {
    idx = 1 // few
  } else {
    idx = 2 // many
  }
  return forms[idx] || ''
}
