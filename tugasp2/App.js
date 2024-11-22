import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>APAKAH KAMU SUKA NGODING?</Text>
      <View style={styles.boxContainer}>
        <View style={styles.box1}>
          <Text style={styles.boxText}>TIDAK</Text>
        </View>
        <View style={styles.box2}>
          <Text style={styles.boxText}>IYA</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0', 
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  text: {
    fontSize: 24, 
    color: 'blue', 
    fontWeight: 'bold',
    marginBottom: 40, 
    textShadowColor: 'rgba(0, 0, 0, 0.1)', 
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  boxContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    width: '100%', 
    maxWidth: 400, 
    paddingHorizontal: 10, 
  },
  box1: {
    width: 100,
    height: 100,
    backgroundColor: '#FF6F61', 
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4, 
  },
  box2: {
    width: 100,
    height: 100,
    backgroundColor: '#6FCF97', 
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4, 
  },
  boxText: {
    color: '#FFF', 
    fontSize: 16, 
    fontWeight: 'bold',
  },
});
