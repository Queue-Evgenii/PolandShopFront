import axios from "axios"
const httpProtocol = process.env.VUE_APP_HTTP_PROTOCOL || 'http';
const httpsProtocol = process.env.VUE_APP_HTTPS_PROTOCOL || 'https';

axios.defaults.baseURL = "http://shop-api.polandgroups.pl/api"

axios.defaults.http = process.env.NODE_ENV === 'production' ? false : httpProtocol === 'http'
axios.defaults.https = process.env.NODE_ENV === 'production' ? true : httpsProtocol === 'https'
export default axios
