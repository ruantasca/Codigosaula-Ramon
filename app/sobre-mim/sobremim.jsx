import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function Lista() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo à página inicial</Text>
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
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: '#FF9900', 
    marginBottom: 20,
  },
  buttonsContainer: {
    display: 'flex',
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
