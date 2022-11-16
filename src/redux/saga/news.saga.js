import {call, put, takeLatest} from 'redux-saga/effects';
import {fetchPostsFailed, fetchPostsSuccess} from 'redux/actions/news.actions';
import {FETCH_POSTS} from 'redux/actions/actionTypes';
import {getPosts} from 'services/news.service';
import {reduxHelper} from 'redux/utils/redux-helpers';

function* onGetPosts({payload}) {
  try {
    const data = yield call(getPosts, payload);
    yield put(fetchPostsSuccess(data?.response));
  } catch (error) {
    yield put(fetchPostsFailed(error.response));
  }
}

function* NewsSaga() {
  yield takeLatest(reduxHelper(FETCH_POSTS).actionRequest, onGetPosts);
}

export default NewsSaga;
