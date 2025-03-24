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
};

resp.formEl.addEventListener('submit', onSubmit);
function onSubmit(event) {
  event.preventDefault();

  if (resp.searchInput.value.trim() === '') {
    return iziToast.warning({
      position: 'topRight',
      message: 'Please enter a search term! something',
    });
  }

  resp.loaderEl.classList.remove('visually-hidden');
  resp.galleryEl.innerHTML = '';

  getData()
    .then(response => {
      if (response.data.hits.length === 0) {
        resp.formEl.reset();

        return iziToast.error({
          position: 'topRight',
          backgroundColor: '#ef4040',
          messageColor: '#fafafb',
          iconUrl: errorIcon,
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      }

      resp.galleryEl.insertAdjacentHTML(
        'beforeend',
        createMarkup(response.data.hits)
      );

      resp.formEl.reset();

      let gallery = new SimpleLightbox('.gallery a', {
        captionsData: 'title',
        captionDelay: 250,
        scrollZoom: false,
      });

      gallery.refresh();
    })
    .catch(error => console.log(error))
    .finally(() => resp.loaderEl.classList.add('visually-hidden'));
}
