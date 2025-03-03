import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import Todolistapp from './screens/todolistapp';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar/>
      <Todolistapp />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
