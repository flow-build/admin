import axios from 'axios'

export const getEditProcess = async (params = {}) => {
  if (params?.data) {
    // console.log('[EditProcess - Endpoints] state: ', params)
    return axios.get(
      `https://jsonplaceholder.typicode.com/users?id=${params.data.id}`,
      {
        params: {
          ...params
        }
      }
    )
  } else {
    // console.log('[EditProcess - Endpoints] state: ', params)
    return axios.get('https://jsonplaceholder.typicode.com/users', {
      params: {
        ...params
      }
    })
  }
}
