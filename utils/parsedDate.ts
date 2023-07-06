export const parsedDate = (strDate: string) => {
  const date = new Date(strDate)
  return date.toLocaleDateString('ru-RU')
}
