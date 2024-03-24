import { UnsplashAPI } from './UnsplashAPI';
import { createGalleryCard } from './markup';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.min.css';

const galleryList = document.querySelector('.js-gallery');
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
api.getPopularPhotos(page).then(({ results, total }) => {
  const markup = createGalleryCard(results);
  galleryList.innerHTML = markup;
  pagination.reset(total);
});

pagination.on('afterMove', event => {
  const currentPage = event.page;
  api.getPopularPhotos(currentPage).then(({ results }) => {
    const markup = createGalleryCard(results);
    galleryList.innerHTML = markup;
  });
});
