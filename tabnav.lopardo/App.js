import React from 'react';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import AppNavigator from "./navigation/AppNavigator"
import { Provider } from 'react-redux';

import store from './store';

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
