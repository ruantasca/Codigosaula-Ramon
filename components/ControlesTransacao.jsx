import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const ControlesTransacao = ({ valor, setValor, Depositar, Sacar }) => {
  return (
    <View style={estilos.container}>
      <TextInput
        style={estilos.input}
        value={valor}
        onChangeText={setValor}
        placeholder="Digite o valor"
        keyboardType="numeric"
      />
      <Button title="Depositar" onPress={Depositar} />
      <Button title="Sacar" onPress={Sacar} color="red" />
    </View>
  );
};

const estilos = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default ControlesTransacao;
