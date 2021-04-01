export const handleObjectCellRenderer = ({ value }) => {
  let result = ''
  const obj = Array.isArray(value) ? value[0] : value

  result = JSON.stringify(obj)?.replace(/^"|"$/g, '') || ''
  return result
}
