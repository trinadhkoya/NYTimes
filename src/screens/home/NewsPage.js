import {FlatList, useWindowDimensions, View, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import NewsItem from 'screens/home/components/NewsItem';
import Divider from 'ui-kit/Divider';
import Loader from 'ui-kit/Loader';
import PropTypes from 'prop-types';

const formatData = (data, numColumns) => {
  const amountFullRows = Math.floor(data.length / numColumns);
  let amountItemsLastRow = data.length - amountFullRows * numColumns;

  while (amountItemsLastRow !== numColumns && amountItemsLastRow !== 0) {
    data.push({key: `empty-${amountItemsLastRow}`, empty: true});
    amountItemsLastRow++;
  }
  return data;
};

const NewsPage = props => {
  const {width} = useWindowDimensions();
  useEffect(() => {}, [width, props.news.length]);

  const renderItem = ({item, index}) => {
    return (
      <View
        style={{
          width: props.numColumns === 2 ? '50%' : '100%',
        }}>
        <NewsItem key={index.toString()} index={index.toString()} item={item} />
      </View>
    );
  };

  return (
    <FlatList
      key={props.numColumns === 2 ? 'two-column' : 'one-column'}
      data={formatData(props.news, props.numColumns)}
      numColumns={props.numColumns}
      renderItem={renderItem}
      removeClippedSubviews={true}
      onEndReachedThreshold={0.1}
      ListFooterComponentStyle={styles.listFooterContainer}
      ListFooterComponent={
        <Loader size={'small'} isLoading={props.isLoading} />
      }
      keyExtractor={(item, index) => index.toString()}
      ItemSeparatorComponent={() => <Divider />}
      onEndReached={() => {
        props.onPressLoadMore(props.page);
      }}
    />
  );
};
const styles = StyleSheet.create({
  listFooterContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
NewsPage.propTypes = {
  onPressLoadMore: PropTypes.func.isRequired,
};

export default NewsPage;
