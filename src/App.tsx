import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
  },
});

export function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pipeline Example</Text>
    </View>
  );
}
