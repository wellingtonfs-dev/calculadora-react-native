import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: { 
    flex: 1,         
    margin: 2,    
    backgroundColor: 'black',     
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#fff',        
    borderRadius: 50,
    width: '100%',
    height: 100,               
  },
  text: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',    
  }, 
  iconBackground: {
    backgroundColor: "#4CAF50", // Cor do fundo quando houver um ícone.
  },
  labelBackground: {
    backgroundColor: "#2196F3", // Cor do fundo quando houver texto.
  }, 
});