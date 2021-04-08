import axios from 'axios'

export const getCardData = async (params = {}) => {
  return axios.get('https://jsonplaceholder.typicode.com/posts', {
    params: {
      ...params,
    },
  })
}
