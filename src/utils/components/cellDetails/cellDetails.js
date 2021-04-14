export const SEARCH_PARAMS = {
  isSearchedByKey: 'isSearchedByKey',
  isCaseSensitive: 'isCaseSensitive',
  isWholeWord: 'isWholeWord',
}

export const SEARCHED_ID = 'json-searched-word'
export const SEARCHED_ON_FOCUS_CLASS = 'json-searched-word-focused'

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

export const filterContent = (searched, searchParams, content) => {
  const contentArray = formatContentToArray(content)
  const contentHTML = contentArray.map(({ leftSpace, key, value }) => {
    const { isSearchedByKey, isCaseSensitive, isWholeWord } = searchParams
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
    const keyFound = `<span id="${SEARCHED_ID}">${key}</span>`
    const valueFound = `: <span id="${SEARCHED_ID}">${value}</span>`

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

export const handleOnFocusID = (currentOnFocus) => {
  const elements = document.querySelectorAll(`#${SEARCHED_ID}`)

  elements?.forEach((element, index) => {
    if (currentOnFocus === index) {
      element.classList.add(SEARCHED_ON_FOCUS_CLASS)
    } else {
      element.classList.remove(SEARCHED_ON_FOCUS_CLASS)
    }
  })
}
