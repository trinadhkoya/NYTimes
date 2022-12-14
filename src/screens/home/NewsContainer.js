import React, {useEffect, useState} from 'react';
import NewsPage from 'screens/home/NewsPage';
import {connect, useDispatch} from 'react-redux';
import {fetchPostsRequest} from 'redux/actions/news.actions';
import FloatingButton from 'ui-kit/FloatingButton';

const INITIAL_PAGE = 0;
const MAX_COLS = 2;

const NewsContainer = props => {
  const dispatch = useDispatch();
  const [displayGrid, setDisplayGrid] = useState(false);

  useEffect(() => {
    dispatch(fetchPostsRequest(INITIAL_PAGE));
  }, []);

  const onPressLoadMore = page => {
    dispatch(fetchPostsRequest(page));
  };

  return (
    <>
      <NewsPage
        {...props}
        onPressLoadMore={onPressLoadMore}
        numColumns={displayGrid ? MAX_COLS : 1}
        news={props.news}
      />
      <FloatingButton
        onToggle={() => setDisplayGrid(!displayGrid)}
        displayGrid={!displayGrid}
      />
    </>
  );
};

NewsContainer.propTypes = {};

const mapStateToProps = ({newsFeed}) => ({
  news: newsFeed.data,
  isLoading: newsFeed.isLoading,
  error: newsFeed.error,
  page: newsFeed.page,
});

export default connect(mapStateToProps)(NewsContainer);
