export const formatJsonToString = (content) => {
  return JSON.stringify(content, undefined, 2)?.replace(/"/g, '') || ''
}

const getLeftEmptySpace = (string) => {
  let leftSpace = ''

  for (let i = 0; i < string?.length; i++) {
    if (string?.charAt(i) !== ' ') break
    leftSpace += ' '
  }

  return leftSpace
}

const formatContentToArray = (content) => {
  const contentFormatted = formatJsonToString(content)
  const contentlines = contentFormatted.match(/[^\r\n]+/g)

  const contentArray = contentlines.map((line) => {
    const leftSpace = getLeftEmptySpace(line)
    const key = line?.split(': ')?.[0]?.trim()
    const value = line?.split(': ')?.[1]?.trim()
    return {
      leftSpace,
      key,
      value,
    }
  })

  return contentArray
}

const removeLastComma = (string) => {
  return string?.replace(/,$/g, '') || ''
}

export const filterContent = (
  searched,
  isSearchedByKey,
  isCaseSensitive,
  isWholeWord,
  content
) => {
  const contentArray = formatContentToArray(content)
  const contentHTML = contentArray.map(({ leftSpace, key, value }) => {
    let line = leftSpace

    const searchedCase = isCaseSensitive ? searched : searched?.toLowerCase()
    const keyCase = isCaseSensitive
      ? removeLastComma(key)
      : removeLastComma(key)?.toLowerCase()
    const valueCase = isCaseSensitive
      ? removeLastComma(value)
      : removeLastComma(value)?.toLowerCase()

    const keyNotFound = key || ''
    const valueNotFound = value ? `: ${value}` : ''
    const keyFound = `<span className="searched-word">${key}</span>`
    const valueFound = `: <span className="searched-word">${value}</span>`

    switch (true) {
      case isSearchedByKey && isWholeWord:
        line += keyCase === searchedCase ? keyFound : keyNotFound
        line += valueNotFound
        break
      case isSearchedByKey:
        line += keyCase.includes(searchedCase) ? keyFound : keyNotFound
        line += valueNotFound
        break
      case isWholeWord:
        line += keyCase === searchedCase ? keyFound : keyNotFound
        line += valueCase === searchedCase ? valueFound : valueNotFound
        break
      default:
        line += keyCase.includes(searchedCase) ? keyFound : keyNotFound
        line += valueCase?.includes(searchedCase) ? valueFound : valueNotFound
        break
    }

    return line
  })

  const result = contentHTML?.join('\n')

  return result
}
