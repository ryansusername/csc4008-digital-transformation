import axios from 'axios'

let config = {
  method: 'GET',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  }
}

export default {
  // ------------------------------------------
  // room endpoints
  // ------------------------------------------
  getAllRooms () {
    return axios.get('room/all', config)
      .then(response => {
        return response.data
      })
  },
  getRoomById () {
  },

  getRoomTemp (id) {
    return axios.get(`room/${id}/temp`, config)
      .then(response => {
        return response.data
      })
  },

  getRoomSound (id) {
    return axios.get(`room/${id}/sound`, config)
      .then(response => {
        return response.data
      })
  },

  getRoomLight (id) {
    return axios.get(`room/${id}/light`, config)
      .then(response => {
        return response.data
      })
  },

  // ------------------------------------------
  // person endpoints
  // ------------------------------------------
  getAllPersons () {
    return axios.get('person/all', config)
      .then(response => {
        return response.data
      })
  },

  getPersonById (id) {
  },

  getCurrentLocation (id) {
    return axios.get(`person/currentLocation/${id}`, config)
      .then(response => {
        return response.data
      })
  },

  getWalletBalance (id) {
    return axios.get(`person/${id}/walletBalance`, config)
      .then(response => {
        return response.data
      })
  },

  // ------------------------------------------
  // Energy Enpoints
  // ------------------------------------------
  getEnergyFeed () {
    return axios.get('energyfeed/allEnergyUsage/', config)
      .then(response => {
        return response.data
      })
  }
}
