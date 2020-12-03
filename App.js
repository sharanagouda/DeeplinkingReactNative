import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './src/AppNavigator';
import NavigationService from './src/NavigationService';

export default function App() {
  return (
    <AppNavigator
      ref={navigatorRef => {
        NavigationService.setTopLevelNavigator(navigatorRef);
      }}
      uriPrefix={'demo://'}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
