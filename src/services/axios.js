/* eslint-disable no-param-reassign */
import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.REACT_APP_URL
})

export default instance
