export const toNormalFormat = (text: string) => {
  return text
    .replace(/(\r\n|\r|\n){2}/g, '$1')
    .replace(/(\r\n|\r|\n){3,}/g, '$1\n')
}
