import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function Lista() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo à página inicial</Text>
      <View style={styles.buttonsContainer}>
        <Pressable>
          <Link href="./Banco/Banco" style={styles.button}>
            Ir para Registro
          </Link>
        </Pressable>
        <Pressable>
          <Link href="./calculadora/calculadora" style={styles.button}>
            Ir para calculadora
          </Link>
        </Pressable>
        <Pressable>
          <Link href="./list/flatlist" style={styles.button}>
            Ir para lista
          </Link>
        </Pressable>
        <Pressable>
          <Link href="./Picker/Picker" style={styles.button}>
            Ir para Picker
          </Link>
        </Pressable>
        <Pressable>
          <Link href="./registro/registro" style={styles.button}>
            Ir para registroPicker
          </Link>
        </Pressable>
        <Pressable>
          <Link href="./splashscreen/splashscreen" style={styles.button}>
            Ir para splashscreen
          </Link>
        </Pressable>
        <Pressable>
          <Link href="./sobre-mim/sobremim" style={styles.button}>
            Ir para Sobre mim 
          </Link>
        </Pressable>
        <Pressable>
          <Link href="./ifome/Inicial" style={styles.button}>
            Ir para ifome
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
