import axios from 'axios'

export const getGeneralStats = async (params = {}) => {
  let endpoint = 'https://604a26779251e100177ce0d3.mockapi.io/api/processes'

  if (Object.entries(params).length > 0) {
    const search = new URLSearchParams(params)
    endpoint = `${endpoint}?${search}`
  }

  return axios.get(endpoint, {
    params: {
      ...params,
    },
  })
}
