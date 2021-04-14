import axios from 'axios'

export const getEditProcess = async (params = {}) => {
  if (params?.data) {
    return axios.get(
      `https://jsonplaceholder.typicode.com/users?id=${params.data.id}`,
      {
        params: {
          ...params
        }
      }
    )
  } else {
    return axios.get('https://jsonplaceholder.typicode.com/users', {
      params: {
        ...params
      }
    })
  }
}
