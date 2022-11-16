import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Dayjs from 'dayjs';
import relativeTIme from 'dayjs/plugin/relativeTime';
import {Colors} from 'theme/Colors';
import PropTypes from 'prop-types';
import {SCREEN_WIDTH} from 'utils/screen.utils';

Dayjs.extend(relativeTIme);

const NewsItem = ({item}) => {
  return (
    <View style={styles.container}>
      <Text numberOfLines={2} style={styles.snippet}>
        {item?.snippet || item?.abstract}
      </Text>
      <View style={[styles.badge]}>
        <Text style={styles.badgeText}>{item.source}</Text>
      </View>
      <Text style={styles.publishedTV}>{Dayjs(item?.pub_date).fromNow()}</Text>
    </View>
  );
};

NewsItem.propTypes = {
  item: PropTypes.object.isRequired,
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.secondaryColor,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingVertical: 5,
    flex: 1,
    marginHorizontal: 2.5,
  },
  snippet: {
    fontWeight: '500',
    paddingVertical: 10,
  },
  source: {},
  badge: {
    backgroundColor: Colors.btnPrimary,
    width: SCREEN_WIDTH * 0.3,
    borderRadius: 50,
  },
  publishedTV: {
    paddingVertical: 10,
    alignSelf: 'flex-end',
  },
  badgeText: {
    color: Colors.white,
    fontSize: 10,
    lineHeight: 22,
    paddingHorizontal: 5,
    flexWrap: 'wrap',
  },
});

export default NewsItem;
