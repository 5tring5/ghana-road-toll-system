import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcome to Ghana Toll App</Text>
      <Button title="My Vehicles" onPress={() => navigation.navigate('Vehicles')} />
      <Button title="Toll History" onPress={() => navigation.navigate('Tolls')} />
    </View>
  );
}
