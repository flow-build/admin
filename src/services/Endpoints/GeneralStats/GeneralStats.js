import axios from 'axios'

export const getGeneralStats = async (params = {}) => {
  const fields = ['id', 'name', 'username', 'email', 'address', 'createdAt']
  let queryString = null

  if (params instanceof URLSearchParams) {
    fields.map((field) => {
      if (params.has(field)) {
        queryString = `https://604a26779251e100177ce0d3.mockapi.io/api/processes?${field}=${params.get(
          field
        )}`
      }
    })
  }

  if (queryString) {
    return axios.get(queryString, {
      params: {
        ...params
      }
    })
  } else {
    return axios.get(
      'https://604a26779251e100177ce0d3.mockapi.io/api/processes',
      {
        params: {
          ...params
        }
      }
    )
  }
}
