import React, { PureComponent } from "react";
import { StyleSheet, Text, View } from "react-native";
import data from "data/data";
import Dayjs from "dayjs";
import relativeTIme from "dayjs/plugin/relativeTime";

Dayjs.extend(relativeTIme);

class NewsItem extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.snippet}>{data.snippet}</Text>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{data.source}</Text>
        </View>

        <Text style={styles.publishedTV}>
          {Dayjs(data?.pub_date).fromNow()}
        </Text>
      </View>
    );
  }
}

NewsItem.propTypes = {};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2ddc3',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  snippet: {
    fontWeight: '500',
    paddingVertical: 10,
  },
  source: {},
  badge: {
    padding: 10,
    backgroundColor: '#333',
    borderRadius: 10,
  },
  publishedTV: {
    paddingVertical: 10,
  },
  badgeText: {color: '#fff'},
});

export default NewsItem;
