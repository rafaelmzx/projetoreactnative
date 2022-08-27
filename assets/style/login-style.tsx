import { StyleSheet } from 'react-native';

export const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0'
  },
  header:{
    backgroundColor: '#f5f5f5',
    paddingBottom: 80,
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    textAlign: 'center',
  },
  inputs:{
    height: 40,
    margin: 10,
    borderWidth: 2,
    borderColor: '#000',
    padding: 10,
    borderRadius: 5,
  },
  image:{
    width: 100,
    height: 150,
    margin: 20,
    marginLeft: 150,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
  }
});