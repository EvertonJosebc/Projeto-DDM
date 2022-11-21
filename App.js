import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  function diminuir(){
    if(count>0){
      setCount(count-1)
    }
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Quantidade de pessoas: { count } </Text>
      <TouchableOpacity style={styles.button} onPress = { ()=> setCount(count + 1)}>
        <Text style={styles.botoes}>+</Text>
      </TouchableOpacity>
      
        <TouchableOpacity style={styles.button} onPress = { ()=> diminuir( )}>
          <Text style={styles.botoes}>-</Text>
        </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '300px',
    margin: 'auto',
    backgroundColor: '#483D8B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color: 'white',
    backgroundColor: '#191970',
    padding: '10px',
    width: '100%',
    textAlign: 'center',
    fontSize: '20px',
    fontFamily: 'roboto',
  },
  botoes: {
    color: 'white',
    padding: '15px',
    backgroundColor: '#6A5ACD',
    width: '200px',
    textAlign: 'center',
    marginTop: '15px',
    borderRadius: '5px',
    fontSize: '18px',
  },
});
