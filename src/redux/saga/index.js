import {all, fork} from 'redux-saga/effects';
import NewsSaga from 'redux/saga/news.saga';

const rootSaga = function* () {
  yield all([fork(NewsSaga)]);
};
export default rootSaga;
