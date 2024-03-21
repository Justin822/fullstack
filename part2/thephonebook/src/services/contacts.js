import axios from "axios";
const baseUrl = "/api/contacts";

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
};

const create = (newObject) => {
  return axios.post(baseUrl, newObject);
};

const update = (id, newObject) => {
  return axios.put(`${baseUrl}/${id}`, newObject);
};

const deleteContactService = (id) => {
  return axios.delete(`${baseUrl}/${id}`);
};

export default {
  getAll: getAll,
  create: create,
  update: update,
  deleteContactService: deleteContactService,
};
