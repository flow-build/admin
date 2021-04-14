import api from 'services/api'

export const getAuthData = async (params = {}) => {
  return api.get('/signin/1', {
    params: {
      ...params,
    },
  })
}
