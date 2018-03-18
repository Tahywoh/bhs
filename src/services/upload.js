// import Api from '@/services/api'
// export default{
//   upload (formData) {
//     return Api.post('/uploads', formData)
//     .then(x => x.data)
//       .then(x => x.map(img => Object.assign({}, img, { url: `http://localhost:8050/handlePhoto/uploads/${img.id}` })))
//   }
// }

import * as axios from 'axios'
const BASE_URL = 'https://server-dvvtkzhghy.now.sh'
// const BASE_URL = 'http:localhost:8050'

let upload = (formData) => {
  const url = `${BASE_URL}/handlePhoto/uploads`
  return axios.post(url, formData)
        // get data
        .then(x => x.data)
        // add url field
        .then(x => x.map(img => Object.assign({},
            img, { url: `uploads/${img.id}` })))
}

export {upload}
