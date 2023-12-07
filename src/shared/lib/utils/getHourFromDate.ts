export const getHourFromDate = (date?: Date) => {
  if (!date) return
  const stringDate = date.toString()
  const hour = parseInt(stringDate.split(' ')[1].split(':')[0])

  return hour
}
