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
