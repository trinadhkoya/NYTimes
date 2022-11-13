import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Dayjs from "dayjs";
import relativeTIme from "dayjs/plugin/relativeTime";
import { Colors } from "theme/Colors";
Dayjs.extend(relativeTIme);


const NewsItem = props => {
  const { data } = props;
  return (
    <View style={styles.container}>
      {data?.snippet!=='' && <Text style={styles.snippet}>{data.snippet}</Text>}
      <View style={styles.badge}>
        <Text style={styles.badgeText}>{data.source}</Text>
      </View>

      <Text style={styles.publishedTV}>
        {Dayjs(data?.pub_date).fromNow()}
      </Text>
    </View>
  );
};

NewsItem.propTypes = {};
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.secondaryColor,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 5,
    paddingHorizontal:10,
    paddingVertical:5
  },
  snippet: {
    fontWeight: "500",
    paddingVertical: 10,
  },
  source: {},
  badge: {
    backgroundColor: Colors.btnPrimary,
    width:"40%",
    borderRadius:50
  },
  publishedTV: {
    paddingVertical: 10,
    alignSelf:'flex-end'
  },
  badgeText: {
    color: "#fff",
    fontSize: 11,
    lineHeight: 24,
    paddingHorizontal: 5,
  },
});

export default NewsItem;
