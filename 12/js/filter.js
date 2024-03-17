const RANDOM_PICTURES_COUNT = 10;

const Filter = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed',
};

let currentFilter = '';
let thumbnails = [];

const filters = document.querySelector('.img-filters');

const enableFilters = (loadedData) => {
  filters.classList.remove('img-filters--inactive');
  currentFilter = Filter.DEFAULT;
  thumbnails = structuredClone(loadedData);
};

const filterThumbnails = () => {
  switch (currentFilter) {
    case Filter.DISCUSSED:
      return [...thumbnails].sort((a, b) => b.comments.length - a.comments.length);
    case Filter.RANDOM:
      return [...thumbnails].sort(() => Math.random() - 0.5).slice(0, RANDOM_PICTURES_COUNT);
    default:
      return [...thumbnails];
  }
};

const setFilterOnClick = (cb) => {
  filters.addEventListener('click', (evt) => {
    const activeButton = filters.querySelector('.img-filters__button--active');
    const clickedButton = evt.target.closest('.img-filters__button');

    if (clickedButton) {
      activeButton.classList.remove('img-filters__button--active');
      clickedButton.classList.add('img-filters__button--active');
      currentFilter = clickedButton.id;
      (cb(filterThumbnails()));
    }
  });
};

export { enableFilters, filterThumbnails, setFilterOnClick };
