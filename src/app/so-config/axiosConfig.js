import axios from 'axios'

const api = 'https://api.m36ng.com/gateway/';
axios.defaults.baseURL = api;
axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';