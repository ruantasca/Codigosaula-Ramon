import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, Pressable } from 'react-native';

const filmes = [
  {
    id: '1',
    nome: 'Ratatouille',
    descricao: 'Filme sobre ratito',
    imagem: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhMkLntHt2Y5NTtU49YZ6J1TH8bYvf2jyq7LBI_gBCUvQOrXYHzX3aI7pbcn2cVwLS18swv9ziwm6iXIHBHL05JhmJrOjzZwLaA1htaZDAyAyfXosHKwAOu-GtD3ms1ptIQjX18i4ivjQ/s1600/filme.jpg',
  },
  {
    id: '2',
    nome: 'Pantera Cor-de-Rosa',
    descricao: 'Pantera cor-de-rosa',
    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5EMXatAK2mBKL02qCg2ntzNOkH9qqk8zg7A&s',
  },
  {
    id: '3',
    nome: 'Spirit: O Corcel Indomável',
    descricao: 'Spirit: O Corcel Indomável',
    imagem: 'https://br.web.img3.acsta.net/medias/nmedia/18/97/04/04/20504443.jpg',
  },
];

export default function FilmesScreen() {
  const [selectedFilmId, setSelectedFilmId] = useState(null);

  const handlePress = (item) => {
    setSelectedFilmId(item.id === selectedFilmId ? null : item.id);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Meus Filmes</Text>
      
      <FlatList
        data={filmes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.listItemContainer}>
            <Pressable onPress={() => handlePress(item)} style={styles.listItem}>
              <Text style={styles.listText}>{item.nome}</Text>
            </Pressable>
            {selectedFilmId === item.id && (
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
    fontSize: 24,
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
    marginVertical: 10,
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
    width: 140,
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
