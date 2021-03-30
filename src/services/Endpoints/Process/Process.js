import axios from 'axios'

export const getProcess = async (params = {}) => {
  return axios.get(
    'http://www.json-generator.com/api/json/get/bPktqdcnTm?indent=2',
    {
      params: {
        ...params,
      },
    }
  )
}
