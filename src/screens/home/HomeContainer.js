import React, { useEffect } from "react";
import HomePage from "screens/home/HomePage";
import { useDispatch } from "react-redux";
import { fetchPostsRequest } from "redux/actions/posts.actions";

function HomeContainer(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPostsRequest());
  }, []);

  return <HomePage {...props} />;
}

HomeContainer.propTypes = {};

export default HomeContainer;
