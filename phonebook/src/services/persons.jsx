import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => axios.get(baseUrl).then(r => r.data)

const add = (data) =>
  axios.post(baseUrl, data)
    .then(r => r.data)

const remove = (data) =>
  axios.delete(`${baseUrl}/${data}`)

const updateNumber = (id, number) =>
  axios.patch(`${baseUrl}/${id}`, {
    number
  })
    .then(r => r.data.number)

export default { getAll, add, remove, updateNumber }