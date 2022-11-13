const axios = require('axios');

const BASE_URL = 'https://api.nytimes.com/';

const HEADERS = {
  'Content-Type': 'application/json; charset=utf-8',
  Accept: 'application/json',
};

const axiosApi = axios.create({
  baseURL: BASE_URL,
  headers: HEADERS,
});

axiosApi.interceptors.request.use(config => {
  // use config.params if it has been set
  config.params = config.params || {};
  // add any client instance specific params to config
  config.params['api-key'] = process.env.NY_TIMES_API_KEY;
  config.params.q = 'unitedstates';

  return config;
});
axiosApi.interceptors.response.use(
  response => response,
  error => Promise.reject(error),
);

export const get = async (url, config) =>
  await axiosApi
    .get(url, {
      ...config,
    })
    .then(response => response?.data);
