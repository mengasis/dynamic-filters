import axios from 'axios'

const baseUrl = 'http://localhost:5000'

function getAll() {
  return axios.get(`${baseUrl}/api/v1/counters`)
}

function create(title) {
  return axios.post(`${baseUrl}/api/v1/counter`, { title })
}

export default { getAll, create }
