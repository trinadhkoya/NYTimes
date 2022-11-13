import {combineReducers} from 'redux';
import {mainFeedReducer} from 'redux/reducer';

const rootReducer = combineReducers({
  newsFeed: mainFeedReducer,
});

export default rootReducer;
