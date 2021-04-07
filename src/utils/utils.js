export const isExternalUrl = (url) => {
  if (url) {
    const regex = /http:|https:|www\./g
    return regex.test(url)
  }

  return false
}

export const stringifyObjects = (arr) => {
  Object.keys(arr[0]).map((key) => {
    if (typeof arr[0][key] === 'object') {
      arr.map((el) => {
        el[key] = JSON.stringify(el[key], null, 2)
      })
    }
  })
}

export const isDateBetweenDays = (first, last, date) =>
  first.getFullYear() <= date.getFullYear() &&
  date.getFullYear() <= last.getFullYear() &&
  first.getMonth() <= date.getMonth() &&
  date.getMonth() <= last.getMonth() &&
  first.getDate() <= date.getDate() &&
  date.getDate() <= last.getDate()

export const areDatesOnSameDay = (first, second) =>
  first.getFullYear() === second.getFullYear() &&
  first.getMonth() === second.getMonth() &&
  first.getDate() === second.getDate()
