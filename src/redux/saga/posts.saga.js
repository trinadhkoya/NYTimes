import { call, put, takeLatest } from "redux-saga/effects";
import { fetchPostsFailed, fetchPostsSuccess } from "redux/actions/posts.actions";
import { FETCH_POSTS } from "redux/actions/actionTypes";
import { getPosts } from "services/news.service";
import { reduxHelper } from "redux/utils/redux-helpers";

function* onGetPosts({payload: query}) {
  try {
    const response = yield call(getPosts, query);
    yield put(fetchPostsSuccess(response.data));
  } catch (error) {
    yield put(fetchPostsFailed(error.response));
  }
}

function* PostsSaga() {
  yield takeLatest(reduxHelper(FETCH_POSTS).actionRequest, onGetPosts);
}

export default PostsSaga;
