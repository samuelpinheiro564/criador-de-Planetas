// styles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  planet: {
    marginBottom: 20,
  },
  planetName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  planetData: {
    fontSize: 16,
  },
  planetCor1: {
    fontSize: 16,
  },
  planetCor2: {
    fontSize: 16,
  },
  planetPopulacao: {
    fontSize: 16,
  },
  planetNatural: {
    fontSize: 16,
  },
  planetHumans: {
    fontSize: 16,
  },
  planetLocalizacao: {
    fontSize: 16,
  },
  planetComunicacao: {
    fontSize: 16,
  },
  planetGovernante: {
    fontSize: 16,
  },
  planetButton: {
    fontSize: 18,
    color: 'blue',
    textAlign: 'center',
    marginVertical: 10,
  },
});

export default styles;
