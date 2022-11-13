import React from 'react';
import {LogBox, SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import HomeContainer from 'screens/home/NewsContainer';
import store from 'redux/store';
import {Provider} from 'react-redux';
import {Colors} from 'theme/Colors';

LogBox.ignoreAllLogs();

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Provider store={store}>
        <HomeContainer />
      </Provider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondaryColor,
  },
});

export default App;
