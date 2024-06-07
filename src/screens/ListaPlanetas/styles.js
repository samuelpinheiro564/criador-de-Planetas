import { StyleSheet } from 'react-native';

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  tit: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  help: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  help1: {
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  text: {
    fontSize: 18,
    color: '#333',
  },
  textbotton: {
    fontSize: 1,
    color: 'Blue',
  },

});
export default styles;