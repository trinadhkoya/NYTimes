import React, {useEffect} from 'react';
import NewsPage from 'screens/home/NewsPage';
import { connect, useDispatch } from "react-redux";
import {fetchPostsRequest} from 'redux/actions/news.actions';
import Loader from "ui-kit/Loader";

const NewsContainer = props => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPostsRequest());
  }, []);

  if(props.isLoading){
    return  <Loader isLoading={props.isLoading}></Loader>
  }

  return <NewsPage {...props} news={props.posts} />;
};

NewsContainer.propTypes = {};

const mapStateToProps = ({newsFeed}) => {
  return {
    posts: newsFeed.data,
    isLoading: newsFeed.isLoading,
    error: newsFeed.error,
  };
};

export default connect(mapStateToProps)(NewsContainer);

