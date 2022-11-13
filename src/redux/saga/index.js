import {all, fork} from 'redux-saga/effects';
import PostsSaga from 'redux/saga/posts.saga';

const rootSaga = function* () {
  yield all([fork(PostsSaga)]);
};
export default rootSaga;
