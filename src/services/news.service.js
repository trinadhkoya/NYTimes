import {get} from './APIClient';

export const getPosts = (query = '', page = 0) => {
  return get(`svc/search/v2/articlesearch.json?&page=${page}`);
};
