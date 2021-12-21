import axios from 'axios'

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.common["Access-Control-Allow-Headers"] = "Origin, X-Requested-With, Content-Type, Accept";

function getEnv(name) {
  return window?.configs?.[name] || process.env[name]
}

const APIClient = axios.create({
    // baseURL: 'http://10.79.202.25:8080/api/',
    // baseURL: 'http://localhost:8080/api/', 
    // baseURL: 'http://192.168.29.66:8080/api/'
    baseURL: getEnv('VUE_APP_URL')
});

export { APIClient }