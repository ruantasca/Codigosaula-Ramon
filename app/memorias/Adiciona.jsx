import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, Pressable, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Adiciona = ({ onVoltar }) => {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [imagem, setImagem] = useState(null);

  const selecionarImagem = async () => {
    const result = await ImagePicker.launchImageLibraryAsync();
    if (!result.canceled) {
      setImagem(result.assets[0].uri);
    }
  };

  const adicionarMemoria = async () => {
    const novaMemoria = { titulo, descricao, imagem };
    const memorias = JSON.parse(await AsyncStorage.getItem('memorias')) || [];
    memorias.push(novaMemoria);
    await AsyncStorage.setItem('memorias', JSON.stringify(memorias));
    onVoltar();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Título:</Text>
      <TextInput
        value={titulo}
        onChangeText={setTitulo}
        style={styles.input}
      />
      <Text style={styles.label}>Descrição:</Text>
      <TextInput
        value={descricao}
        onChangeText={setDescricao}
        style={styles.input}
      />
      <Button title="Selecionar Imagem" onPress={selecionarImagem} />
      {imagem && <Image source={{ uri: imagem }} style={styles.image} />}
      <Pressable onPress={adicionarMemoria} style={styles.button}>
        <Text style={styles.buttonText}>Adicionar Memória</Text>
      </Pressable>
      <Pressable onPress={onVoltar} style={styles.button}>
        <Text style={styles.buttonText}>Voltar</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F5F5F5', 
  },
  label: {
    fontSize: 18,
    color: '#333333',
    marginBottom: 5,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#FF9900',
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
  },
  image: {
    width: 200,
    height: 200,
    marginVertical: 10,
    borderRadius: 5,
  },
  button: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#FF9900',
    borderRadius: 5,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default Adiciona;
