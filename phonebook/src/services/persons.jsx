import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => axios.get(baseUrl).then(r => r.data)

const add = (data) =>
  axios.post(baseUrl, data)
    .then(r => r.data)

const removePerson = (data) => {
  console.log(data);
  return axios.delete(`${baseUrl}/${data}`)
    .then(/*r => r.data.id*/)
}


export default { getAll, add, removePerson }