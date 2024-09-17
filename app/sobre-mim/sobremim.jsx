import React from 'react';
import { View, Text, Pressable, StyleSheet, Image } from 'react-native';
import { Link } from 'expo-router';

const profileImageUrl = 'https://avatars.githubusercontent.com/u/130461902?v=4';

export default function Lista() {
  return (
    <View style={styles.container}>
      {/* Cabeçalho com "Bem-vindo" e a foto de perfil */}
      <View style={styles.header}>
        <Text style={styles.title}>Bem-vindo à página inicial</Text>
        <Image source={{ uri: profileImageUrl }} style={styles.profileImage} />
      </View>
      
      {/* Botões de navegação */}
      <View style={styles.buttonsContainer}>
        <Pressable>
          <Link href="./viagens/viagens" style={styles.button}>
            Ir para viagens
          </Link>
        </Pressable>
        <Pressable>
          <Link href="./filmes/filmes" style={styles.button}>
            Ir para filmes
          </Link>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#232F3E', 
    padding: 0,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: '#FF9900', 
  },
  title: {
    fontSize: 24,
    color: '#232F3E', 
    fontWeight: 'bold',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25, 
  },
  buttonsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    marginTop: 20,
  },
  button: {
    backgroundColor: '#FF9900', 
    padding: 10,
    borderRadius: 5,
    textAlign: 'center',
    width: 200,
    color: '#232F3E', 
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
