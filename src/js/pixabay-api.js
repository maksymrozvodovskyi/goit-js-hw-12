import axios from 'axios';

const API_KEY = '49388465-88aa64a30b18d669aa90a58a7';
const BASE_URL = 'https://pixabay.com/api/';

export async function getData(query, page = 1) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        per_page: 15,
        page,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}
