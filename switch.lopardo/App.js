import React, { useState } from 'react';
import { View } from 'react-native';

import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import ListScreen from './screens/ListScreen'
import PrincipalCreen from './screens/PrincipalScreen';
import styles from './styles';

export default function App() {
  const [loaded] = useFonts({
    'ubuntu': require('./assets/fonts/Ubuntu-Regular.ttf'),
    'ubuntu-bold': require('./assets/fonts/Ubuntu-Bold.ttf')
  });

  const [showMain, setShowMain] = useState(true);

  if (!loaded) return <AppLoading />

  const handleShowMain = (showMain) => {
    setShowMain(showMain);
  }

  let content = <ListScreen showMain={handleShowMain} />
  
  if (showMain)
    content = <PrincipalCreen showMain={handleShowMain} />

  return (
    <View style={styles.screen}>
      {content}
    </View>
  );
}
