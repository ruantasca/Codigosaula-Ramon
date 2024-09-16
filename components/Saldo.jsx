import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Saldo = ({ saldo }) => {
  return (
    <View style={estilos.container}>
      <Image
        source={{ uri: 'https://th.bing.com/th/id/R.41da709fa917a52376956a3a58b279e8?rik=NSAn2lBwd9I3ig&pid=ImgRaw&r=0' }}
        style={estilos.imagem}
      />
      <Text style={estilos.rotulo}>Saldo Atual:</Text>
      <Text style={estilos.saldo}>R$ {saldo.toFixed(2)}</Text>
    </View>
  );
};

const estilos = StyleSheet.create({
  container: {
    marginBottom: 20,
    alignItems: 'center',
  },
  imagem: {
    width: 300,
    height: 300,
    marginBottom: 10,
  },
  rotulo: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  saldo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'green',
  },
});

export default Saldo;
