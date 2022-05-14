import axios from 'axios'

const myAxios = axios.create({
    baseURL:'http://localhost:5000/api/',
    timeout:6000,
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


export default myAxios