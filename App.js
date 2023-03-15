import { StatusBar } from 'expo-status-bar';
import { Alert,Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React,{useState} from 'react';

export default function App() {

  
  const [ligar, setLigar] = useState(false)
  const [ligar1, setLigar1] = useState(false)

  const apagarNome = () => {
    setLigar(!ligar)
  }
  const apagarNome1 = () => {
    setLigar1(!ligar1)
  }
  
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.containertext}>

        {
          ligar ? 
          <Text> </Text>
          :
          <Text>aqui tem um texto que desaparecerar</Text>
        }
        
      </View>
      <View style={styles.containerbotao}>
        <Button Style={styles.botao} title='Apertar' onPress={apagarNome}></Button>
      </View>
      <View style={styles.containertext}>

        {
          ligar1 ? 
          <Text> </Text>
          :
          <Text>aqui tem um texto que desaparecerar</Text>
        }
        
      </View>
      <View style={styles.containerbotao}>
        <Button Style={styles.botao} title='Apertar' onPress={apagarNome1}></Button>
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',

  },

  containertext:{
    alignItems: 'center',
  },

  containerbotao:{
    marginVertical:10,
  }
});
