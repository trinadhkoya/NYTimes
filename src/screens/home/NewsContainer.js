import React, {useEffect, useState} from 'react';
import NewsPage from 'screens/home/NewsPage';
import {connect, useDispatch} from 'react-redux';
import {fetchPostsRequest} from 'redux/actions/news.actions';
import FloatingButton from 'ui-kit/FloatingButton';

const initialPage = 0;
const maxColumns = 2;

const NewsContainer = props => {
  const dispatch = useDispatch();
  const [displayGrid, setDisplayGrid] = useState(false);

  useEffect(() => {
    dispatch(fetchPostsRequest(initialPage));
  }, []);

  const onPressLoadMore = page => {
    dispatch(fetchPostsRequest(page));
  };

  return (
    <>
      <NewsPage
        {...props}
        onPressLoadMore={onPressLoadMore}
        numColumns={displayGrid ? maxColumns : 1}
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
