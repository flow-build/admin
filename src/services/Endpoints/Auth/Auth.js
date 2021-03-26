import api from 'services/api'

export const getAuthData = async (params = {}) => {
  return await api.get('/signin/1', {
    params: {
      ...params
    }
  })
}
