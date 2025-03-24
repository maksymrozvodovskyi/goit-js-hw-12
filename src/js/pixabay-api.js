import axios from 'axios';
import { resp } from '../main';

const API_KEY = '49388465-88aa64a30b18d669aa90a58a7';
const BASE_URL = 'https://pixabay.com/api/';
export function getData() {
  return axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: resp.searchInput.value,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
    },
  });
}
