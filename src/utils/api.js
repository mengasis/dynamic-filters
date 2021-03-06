import axios from 'axios'

const baseUrl = window.location.origin

function getAll() {
  return axios.get(`${baseUrl}/api/v1/counters`)
}

function create(title) {
  return axios.post(`${baseUrl}/api/v1/counter`, { title })
}

function remove(id) {
  return axios.delete(`${baseUrl}/api/v1/counter`, { data: { id } })
}

function inc(id) {
  return axios.post(`${baseUrl}/api/v1/counter/inc`, { id })
}

function dec(id) {
  return axios.post(`${baseUrl}/api/v1/counter/dec`, { id })
}

export default { getAll, create, remove, inc, dec }
