import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, Pressable, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function indexm ({ onAdicionar }) {
  const [memorias, setMemorias] = useState([]);

  const carregarMemorias = async () => {
    const memoriasSalvas = JSON.parse(await AsyncStorage.getItem('memorias')) || [];
    setMemorias(memoriasSalvas);
  };

  useEffect(() => {
    carregarMemorias();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={memorias}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.memoria}>
            <Text style={styles.titulo}>{item.titulo}</Text>
            <Text>{item.descricao}</Text>
            {item.imagem && <Image source={{ uri: item.imagem }} style={styles.image} />}
          </View>
        )}
      />
      <Pressable onPress={onAdicionar} style={styles.button}>
        <Text style={styles.buttonText}>Adicionar Nova Memória</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  memoria: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#FF9900',
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333333',
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
    textAlign: 'center',
  },
});

