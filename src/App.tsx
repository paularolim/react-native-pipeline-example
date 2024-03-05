import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ENV_1, ENV_2, ENV_3} from '@env';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  label: {
    fontSize: 22,
  },
});

export function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pipeline Example</Text>
      <Text style={styles.label}>env_1={ENV_1}</Text>
      <Text style={styles.label}>env_2={ENV_2}</Text>
      <Text style={styles.label}>env_3={ENV_3}</Text>
    </View>
  );
}
