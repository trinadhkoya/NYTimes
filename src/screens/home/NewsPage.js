import {FlatList, useWindowDimensions, View} from 'react-native';
import React, {useEffect} from 'react';
import NewsItem from 'screens/home/components/NewsItem';
import Divider from 'ui-kit/Divider';

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
  useEffect(() => {}, [width]);

  const renderItem = ({item, index}) => {
    return (
      <View
        style={{
          width: props.numColumns === 2 ? '50%' : '100%',
        }}>
        <NewsItem index={index.toString()} item={item} />
      </View>
    );
  };

  return (
    <FlatList
      key={props.numColumns === 2 ? 'two-column' : 'one-column'}
      data={formatData(props.news, props.numColumns)}
      numColumns={props.numColumns}
      renderItem={renderItem}
      keyExtractor={item => item?._id.toString()}
      ItemSeparatorComponent={() => <Divider />}
    />
  );
};

export default NewsPage;
