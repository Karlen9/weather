export const getTomorrow = () => {
  const date = new Date()
  const day = date.getDate() + 1
  const month = date.getMonth()
  const year = date.getFullYear()

  return `${year}-${month}-${day}`
}
