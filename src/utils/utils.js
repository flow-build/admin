export const isExternalUrl = (url) => {
  if (url) {
    const regex = /http:|https:|www\./g
    return regex.test(url)
  }

  return false
}
