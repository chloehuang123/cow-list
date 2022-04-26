import axios from 'axios';

const searchCow = {
  getAllCow() {
    return axios.get('http://localhost:3000/api/cows')
  },

  getACow(cow) {
    return axios.get('http://localhost:3000/api/cows', {
      params: {
        name: cow.name
      }
    })
  },

  add(cow) {
    return axios.post('http://localhost:3000/api/cows', cow)
  }
}

export default searchCow;