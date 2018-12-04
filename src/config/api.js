import Axios from 'axios'

let host =  '//h5api.aylives.cn/aoyuejia/yuepao'

Axios.defaults.withCredentials = true

let api = {
  Axios: Axios,
  STONE: `${host}/userinfo`,
  USERINFO: `${host}/userinfo`,
  CREATE: (pic, name, num) => `${host}/add?pic=${pic}&name=${name}&people=${num}`,
  SHOW: (id) => `${host}/show?id=${id}`,
  UPLOAD: '//lars.aylives.cn/Lars/upload',            //上传图片
  SHARE: (shareId) => `${host}/api/show?ruleId=${shareId}`    //分享页面
}

export default api
