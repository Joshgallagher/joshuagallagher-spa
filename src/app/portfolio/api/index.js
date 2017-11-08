import axios from 'axios'

export const get = () => {
  return axios.get(`${process.env.API_URL}/articles`)
}
