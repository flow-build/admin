export const isExternalUrl = (url) => {
  if (url) {
    const regex = /http:|https:|www\./g
    return regex.test(url)
  }

  return false
}

export const isString = (value) => {
  return typeof value === 'string'
}

export const stringifyObjects = (arr) => {
  if (arr[0]) {
    Object.keys(arr[0]).map((key) => {
      if (typeof arr[0][key] === 'object') {
        arr.map((el) => {
          el[key] = JSON.stringify(el[key], null, 2)
        })
      }
    })
  }
}
