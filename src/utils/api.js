import axios from 'axios'

const baseUrl = 'http://localhost:5000'

function getAll() {
  return axios.get(`${baseUrl}/api/v1/counters`)
}

export default { getAll }
