import axios from 'axios'
import mpAdapter from 'axios-miniprogram-adapter'

axios.defaults.adapter = mpAdapter

const rest = axios.create({
  baseURL: 'https://easy-mock.com'
})

export default rest