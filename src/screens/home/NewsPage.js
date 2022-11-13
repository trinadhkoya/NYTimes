import React from "react";
import { FlatList } from "react-native";
import PropTypes from "prop-types";
import NewsItem from "screens/home/components/NewsItem";
import Divider from "ui-kit/Divider";

function NewsPage(props) {
  const _renderItem = ({ item }) => <NewsItem data={item}></NewsItem>;

  const renderItemSeparatorComponent = () => <Divider/>

  return <FlatList  numColumns={1} ItemSeparatorComponent={renderItemSeparatorComponent} data={props.news} renderItem={_renderItem} />;
}

NewsPage.propTypes = {
  news: PropTypes.array,
};
NewsPage.defaultProps = {
  news: [],
};

export default NewsPage;
