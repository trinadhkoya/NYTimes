import { get } from "./APIClient";

export const getPosts = (query = 'SBU', page = 0) =>
  get(`svc/search/v2/articlesearch.json?&page=${page}`);
