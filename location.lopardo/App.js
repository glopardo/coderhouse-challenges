import React from 'react';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { Provider } from 'react-redux';

import AppNavigator from "./navigation/AppNavigator"
import store from './store';
import { init } from './db'

init()
  .then(() => console.log('Database initialized'))
  .catch(err => {
    console.log('Database failed to connect: ')
    console.log(err.message)
  })

export default function App() {
  const [loaded] = useFonts({
    'ubuntu': require('./assets/fonts/Ubuntu-Regular.ttf'),
    'ubuntu-bold': require('./assets/fonts/Ubuntu-Bold.ttf')
  });

  if (!loaded) return <AppLoading />

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
