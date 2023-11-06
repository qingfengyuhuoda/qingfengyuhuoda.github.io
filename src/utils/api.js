import axios from 'axios'

const api = axios.create({
  baseURL: 'http://your-api-url.com' // 后端API的基础URL
})

export function fetchData() {
  return api.get('/api/data')
    .then(response => response.data)
    .catch(error => {
      throw new Error(error)
    })
}

export function postData(data) {
  return api.post('/api/data', data)
    .then(response => response.data)
    .catch(error => {
      throw new Error(error)
    })
}

// 其他后端请求的函数