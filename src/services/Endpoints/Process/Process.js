import axios from 'axios'

export const getProcess = async (params = {}) => {
  return axios.get('https://pokeapi.co/api/v2/pokemon/ditto', {
    params: {
      ...params,
    },
  })
}
