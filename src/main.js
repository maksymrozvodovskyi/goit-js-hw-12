import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { createMarkup } from './js/render-functions';
import { getData } from './js/pixabay-api';

import errorIcon from '/img/error.png';

export const resp = {
  formEl: document.querySelector('.form'),
  galleryEl: document.querySelector('.gallery'),
  loaderEl: document.querySelector('.loader'),
  searchInput: document.querySelector('.form-input'),
  loadMoreBtn: document.querySelector('.load-btn'),
};

let searchQuery = '';
let page = 1;
let totalHits = 0;
let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'title',
  captionDelay: 250,
  scrollZoom: false,
});

resp.formEl.addEventListener('submit', onSubmit);
resp.loadMoreBtn.addEventListener('click', onLoadMore);

async function onSubmit(event) {
  event.preventDefault();
  searchQuery = resp.searchInput.value.trim();

  if (!searchQuery) {
    return iziToast.warning({
      position: 'topRight',
      message: 'Please enter a search term!',
    });
  }

  page = 1;
  totalHits = 0;
  resp.galleryEl.innerHTML = '';
  resp.loadMoreBtn.classList.add('visually-hidden');
  resp.loaderEl.classList.remove('visually-hidden');

  try {
    const data = await getData(searchQuery, page);
    totalHits = data.totalHits;

    if (data.hits.length === 0) {
      iziToast.error({
        position: 'topRight',
        backgroundColor: '#ef4040',
        messageColor: '#fafafb',
        iconUrl: errorIcon,
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
      return;
    }

    resp.galleryEl.insertAdjacentHTML('beforeend', createMarkup(data.hits));
    gallery.refresh();

    if (data.hits.length === 15 && totalHits > 15) {
      resp.loadMoreBtn.classList.remove('visually-hidden');
    }
  } catch (error) {
    console.log(error);
  } finally {
    resp.loaderEl.classList.add('visually-hidden');
  }
}

async function onLoadMore() {
  page += 1;
  resp.loaderEl.classList.remove('visually-hidden');

  try {
    const data = await getData(searchQuery, page);
    resp.galleryEl.insertAdjacentHTML('beforeend', createMarkup(data.hits));
    gallery.refresh();

    scrollPage();

    const loadedImages = page * 15;
    if (loadedImages >= totalHits) {
      resp.loadMoreBtn.classList.add('visually-hidden');
      iziToast.info({
        position: 'topRight',
        message: "We're sorry, but you've reached the end of search results.",
      });
    }
  } catch (error) {
    iziToast.error({ message: 'Something went wrong!' });
  } finally {
    resp.loaderEl.classList.add('visually-hidden');
  }
}

function scrollPage() {
  const galleryItem = document.querySelector('.gallery-item');
  if (galleryItem) {
    const cardHeight = galleryItem.getBoundingClientRect().height;
    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });
  }
}
