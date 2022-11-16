import {FETCH_POSTS} from 'redux/actions/actionTypes';
import {reduxHelper} from 'redux/utils/redux-helpers';

const fetchPostsRequest = page => {
  return {
    type: reduxHelper(FETCH_POSTS).actionRequest,
    payload: page,
  };
};

const fetchPostsSuccess = data => {
  return {
    type: reduxHelper(FETCH_POSTS).actionSuccess,
    payload: data?.docs,
    page: data.meta.offset / 10 + 1,
  };
};

const fetchPostsFailed = error => {
  return {
    type: reduxHelper(FETCH_POSTS).actionFailure,
    payload: error,
  };
};

export {fetchPostsFailed, fetchPostsRequest, fetchPostsSuccess};
