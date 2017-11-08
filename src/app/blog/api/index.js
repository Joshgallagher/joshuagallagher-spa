import axios from 'axios'

export const getArticles = () => {
  return axios.get(`${process.env.API_URL}/articles`)
}
