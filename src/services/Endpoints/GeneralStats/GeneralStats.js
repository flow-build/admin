import axios from 'axios'

export const getGeneralStats = async (params = {}) => {
  return axios.get('https://jsonplaceholder.typicode.com/users', {
    params: {
      ...params
    }
  })
}
