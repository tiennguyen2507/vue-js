import axios from 'axios'
import router from '../routes';

const myAxios = axios.create({
  baseURL: 'http://localhost:5000/api/',
  timeout: 6000,
})
//config request
myAxios.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  return Promise.reject(error);
});

//config respone
myAxios.interceptors.response.use(function (response) {
  return response.data;
}, function (error) {
  return Promise.reject(error.response.data);
});

export const setOrDeleteAuthorizationHeader = async () => {
  const token = localStorage.getItem('token')
  myAxios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  try {
    await myAxios.get('/auth/checkToken')
  
  } catch (error) {
    delete myAxios.defaults.headers.common['Authorization']
    localStorage.removeItem('token')
    router.push({name:'login'})
  }

}


export default myAxios