import React from 'react';
import {LogBox, SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import HomeContainer from 'screens/home/NewsContainer';
import {Provider} from 'react-redux';
import {Colors} from 'theme/Colors';
import {PersistGate} from 'redux-persist/integration/react';
import configureStore from 'redux/configureStore';

LogBox.ignoreAllLogs();

const App = () => {
  const {store, persistor} = configureStore();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <HomeContainer />
        </PersistGate>
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
