import instance from 'services/axios'

export async function getAuthData() {
  try {
    const response = await instance.get('/signin/1')

    return response.data
  } catch (error) {
    throw new Error(error)
  }
}
