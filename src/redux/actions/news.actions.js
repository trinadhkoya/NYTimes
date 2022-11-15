import {FETCH_POSTS} from 'redux/actions/actionTypes';
import {reduxHelper} from 'redux/utils/redux-helpers';

const fetchPostsRequest = query => {
  console.log('QUERY PARAM IS' + query);
  return {
    type: reduxHelper(FETCH_POSTS).actionRequest,
    payload: query,
  };
};

const fetchPostsSuccess = data => {
  return {
    type: reduxHelper(FETCH_POSTS).actionSuccess,
    payload: data,
  };
};

const fetchPostsFailed = error => {
  return {
    type: reduxHelper(FETCH_POSTS).actionFailure,
    payload: error,
  };
};

export {fetchPostsFailed, fetchPostsRequest, fetchPostsSuccess};
