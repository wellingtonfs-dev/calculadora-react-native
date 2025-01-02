import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',    
    padding: 10    
  },
  line:{
    flexDirection: 'row', 
  },
  title:{
    flexDirection: "row",    
    width: "100%",
    alignItems: "center",   
  },
  text:{
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    margin: 10,    
    textAlign: 'center',
  }
});
