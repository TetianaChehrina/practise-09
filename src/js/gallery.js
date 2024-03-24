import { UnsplashAPI } from './UnsplashAPI';
import { createGalleryCard } from './markup';
import Pagination from 'tui-pagination';
import iziToast from 'izitoast';
import 'tui-pagination/dist/tui-pagination.min.css';
import 'izitoast/dist/css/iziToast.min.css';

const galleryList = document.querySelector('.js-gallery');
const searchInput = document.querySelector('.search-input');
const loader = document.querySelector('.loader');
const container = document.getElementById('tui-pagination-container');
const options = {
  totalItems: 0,
  itemsPerPage: 12,
  visiblePages: 5,
  page: 1,
};

const pagination = new Pagination(container, options);
const page = pagination.getCurrentPage();
const api = new UnsplashAPI();

loader.classList.remove('is-hidden');

api.getPopularPhotos(page).then(({ results, total }) => {
  const markup = createGalleryCard(results);
  galleryList.innerHTML = markup;
  pagination.reset(total);
}).finally(() => loader.classList.add('is-hidden'));

pagination.on('afterMove', fillPopularImages);

document.querySelector('.js-search-form').addEventListener('submit', function (event) {
  event.preventDefault();
  const searchQuery = searchInput.value.trim();
  if(!searchQuery){
    iziToast.warning({ message: "Enter search query" });
    return;
  };

  api.query = searchQuery;
  pagination.off('afterMove',fillPopularImages);
  pagination.off('afterMove',fillImagesByQuery);
  loader.classList.remove('is-hidden');
  api.getImagesByQuery(page).then(({ results, total }) => {
    if (results.length === 0) {
      iziToast.warning({ message: "No images found." });
      return;
    }
    galleryList.innerHTML = createGalleryCard(results);
    pagination.reset(total);
  }).finally(() => loader.classList.add('is-hidden'));
  pagination.on('afterMove', fillImagesByQuery);
})

function fillImagesByQuery(event){
  api.getImagesByQuery(event.page).then(({ results }) => {
    galleryList.innerHTML = createGalleryCard(results);
  })
}

function fillPopularImages(event){
  const currentPage = event.page;
  api.getPopularPhotos(currentPage).then(({ results }) => {
    const markup = createGalleryCard(results);
    galleryList.innerHTML = markup;
  });
}
