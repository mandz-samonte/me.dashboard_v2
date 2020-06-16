import axios from 'axios';

const MODULE_PREFIXES = '/api/habit-tracker';

export function index(params) {
  return axios.get(`${MODULE_PREFIXES}`, params);
}

export function add(params) {
  return axios.post(`${MODULE_PREFIXES}`, params);
}

export function update(id, params) {
  return axios.put(`${MODULE_PREFIXES}/${id}`, params);
}

export function remove(id, params) {
  return axios.delete(`${MODULE_PREFIXES}/${id}`, params);
}

export default {
  index,
  add,
  update,
  remove
}
