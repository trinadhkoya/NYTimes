import React from 'react';
import {FlatList} from 'react-native';
import PropTypes from 'prop-types';
import NewsItem from 'screens/home/components/NewsItem';
import Divider from 'ui-kit/Divider';

const NewsPage = props => {
  const _renderItem = ({item}) => <NewsItem item={item} />;

  const renderItemSeparatorComponent = () => <Divider />;

  return (
    <FlatList
      numColumns={props.numColumns}
      ItemSeparatorComponent={renderItemSeparatorComponent}
      data={props.news}
      renderItem={_renderItem}
      keyExtractor={item => '_' + item._id.toString()}
    />
  );
};

NewsPage.propTypes = {
  news: PropTypes.array,
};
NewsPage.defaultProps = {
  news: [],
};

export default NewsPage;
