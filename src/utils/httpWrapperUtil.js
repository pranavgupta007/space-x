import axios from 'axios';
import { basePath } from './properties';


export function getFn(api, paramObj, baseURL= basePath) {
  return axios.get(api, {
        'params': paramObj,
        'baseURL':  baseURL
    });
}

export function postFn(api, paramObj, postObj, baseURL = basePath) {
    return axios.post(api, postObj, {
      'params': paramObj,
      'baseURL':  baseURL
    });
}
