import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Ghana Road Toll Collection System</Text>
      <Text>Welcome to the mobile portal</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    padding: 16
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  }
});