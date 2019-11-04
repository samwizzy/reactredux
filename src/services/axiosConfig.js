import axios from 'axios'

/* Api Collections */
const rest = "https://jsonplaceholder.typicode.com/users";
const catapi = 'https://marcus-grouchy-oryx.cfapps.io/api/v1/productCategories';
const api = "https://marcus-grouchy-oryx.cfapps.io/oauth/token";
const cors = "https://cors-anywhere.herokuapp.com/" + api;

const token = new Buffer('web-client:password').toString('base64');

const headers = {
  'Authorization': 'Basic ' + token,
}

/* Axios Configuration Settings */
axios.defaults.baseURL = "https://marcus-grouchy-oryx.cfapps.io";
axios.defaults.headers.common['Authorization'] = "Basic " + token;
axios.defaults.headers.post['Content-Type'] = "application/x-www-form-urlencoded";


// const token = btoa('web-client:password'); # optional hashing method

/* Axios Configuration Settings */
// const config = axios.create({
//   baseURL: `https://marcus-grouchy-oryx.cfapps.io`
// });

export {cors, headers, rest, catapi}
