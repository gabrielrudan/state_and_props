import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {

  contador = {
    valor: 0
  }

  contarClick = () => {
    this.setState({
      valor: this.contador.valor++
    })
    console.log("Você pressionou o botão!")
  }

  render(){
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 20, padding: 20, color: 'grey'}}>Você pressionou o botão:</Text>
        <Text style={{ fontSize: 60, marginBottom: -20, color: 'blue'}}>{this.contador.valor}</Text>
        <Text style={{ fontSize: 20, padding: 20, color: 'grey'}}>vez(es)</Text>
        <StatusBar style="auto" />
        <View style={{ flexDirection: 'row'}}>
          <Button onPress={this.contarClick} title="Clique Aqui"></Button>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
