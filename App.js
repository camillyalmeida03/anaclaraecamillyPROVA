import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TelaLogin from '/src/TelaLogin';

export default function App() {
  return (
    <TelaLogin/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CCEEFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
