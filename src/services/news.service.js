import {get} from './APIClient';

/**
 *We can pass parameter as in when required
 * @param page
 * @returns {Promise<*>}
 */
export const getPosts = page => {
  return get(`svc/search/v2/articlesearch.json?&page=${page}`);
};
