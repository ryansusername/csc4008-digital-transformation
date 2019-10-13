import axios from 'axios'

axios.defaults.baseURL = 'http://lvh.me:8099'

export default ({ Vue }) => {
  Vue.prototype.$axios = axios
}
