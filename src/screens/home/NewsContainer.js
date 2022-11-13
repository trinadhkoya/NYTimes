import React, {useEffect, useState} from 'react';
import NewsPage from 'screens/home/NewsPage';
import {connect, useDispatch} from 'react-redux';
import {fetchPostsRequest} from 'redux/actions/news.actions';
import Loader from 'ui-kit/Loader';
import FloatingButton from 'ui-kit/FloatingButton';

const NewsContainer = props => {
  const dispatch = useDispatch();
  const [displayGrid, setDisplayGrid] = useState(false);

  useEffect(() => {
    dispatch(fetchPostsRequest());
  }, [displayGrid]);

  if (props.isLoading) {
    return <Loader isLoading={props.isLoading} />;
  }

  return (
    <>
      <NewsPage {...props} numColumns={displayGrid ? 2 : 1} news={props.news} />
      <FloatingButton
        onToggle={() => setDisplayGrid(!displayGrid)}
        displayGrid={displayGrid}
      />
    </>
  );
};

NewsContainer.propTypes = {};

const mapStateToProps = ({newsFeed}) => {
  return {
    news: newsFeed.data,
    isLoading: newsFeed.isLoading,
    error: newsFeed.error,
  };
};

export default connect(mapStateToProps)(NewsContainer);
