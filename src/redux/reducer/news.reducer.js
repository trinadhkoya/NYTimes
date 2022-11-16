import {FETCH_POSTS} from 'redux/actions/actionTypes';
import {reduxHelper} from 'redux/utils/redux-helpers';

const initialState = {
  isLoading: false,
  data: [],
  error: '',
  page: 0,
};

export default (state = initialState, action) => {
  // console.log(action.payload);
  // console.log(action.page);

  switch (action.type) {
    case reduxHelper(FETCH_POSTS).actionRequest:
      return {
        ...state,
        isLoading: true,
      };
    case reduxHelper(FETCH_POSTS).actionSuccess:
      const data = [...state.data, ...action.payload];
      return {
        ...state,
        isLoading: false,
        data,
        page: action.page,
        error: '',
      };
    case reduxHelper(FETCH_POSTS).actionFailure:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
