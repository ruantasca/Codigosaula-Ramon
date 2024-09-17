import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, Pressable } from 'react-native';

const lugares = [
  {
    id: '1',
    nome: 'Urubici',
    descricao: 'Urubici, muito louco, lá é frio.',
    imagem: 'https://visiteaserrasc.com.br/painel/img/vserrasc_site/6_cidades_14253.jpg',
  },
  {
    id: '2',
    nome: 'Chapecó',
    descricao: 'Chapecó, gente boa, o povo é legal.',
    imagem: 'https://blog.mobg.com.br/content/images/2024/07/chapeco-mobg--1-.jpg',
  },
  {
    id: '3',
    nome: 'Paraná',
    descricao: 'Paraná, muito plano, lugar bom de morar.',
    imagem: 'https://www.destino.foz.br/wp-content/uploads/2022/01/002-%E2%80%93-Cataratas-do-Iguacu-e1663260066395.jpg',
  },
];

export default function ViagensScreen() {
  const [selectedPlaceId, setSelectedPlaceId] = useState(null);

  const handlePress = (item) => {
    setSelectedPlaceId(item.id === selectedPlaceId ? null : item.id); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Minhas Viagens</Text>
      
      <FlatList
        data={lugares}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.listItemContainer}>
            <Pressable onPress={() => handlePress(item)} style={styles.listItem}>
              <Text style={styles.listText}>{item.nome}</Text>
            </Pressable>
            {selectedPlaceId === item.id && (
              <View style={styles.content}>
                <Image source={{ uri: item.imagem }} style={styles.image} />
                <Text style={styles.info}>{item.descricao}</Text>
              </View>
            )}
          </View>
        )}
        style={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#232F3E', 
  },
  header: {
    fontSize: 29,
    fontWeight: 'bold',
    padding: 15,
    textAlign: 'center',
    color: '#FFFFFF', 
    backgroundColor: '#FF9900', 
  },
  list: {
    marginTop: 20,
  },
  listItemContainer: {
    width: 400,
    alignSelf: 'center',
    alignItems: 'center',
  },
  listItem: {
    padding: 15,
    marginVertical: 5,
    backgroundColor: '#FF9900', 
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  listText: {
    fontSize: 18,
    color: '#232F3E', 
    fontWeight: 'bold',
    textAlign: 'center',
  },
  content: {
    justifyContent: 'center', 
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  info: {
    fontSize: 18,
    color: '#FFFFFF', 
    textAlign: 'center',
  },
});
