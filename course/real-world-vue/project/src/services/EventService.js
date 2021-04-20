import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/umangcodes/api-data',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'content-Type': 'application/json',
}
})

export default{
  getEvents() {
    return apiClient.get('/events')
  }
}