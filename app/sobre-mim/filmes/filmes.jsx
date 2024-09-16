import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function FilmesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Meus Filmes </Text>
      <Text style={styles.info}>Ratatoulie</Text>
      <Text style={styles.info}>Pantera cor de rosa</Text>
      <Text style={styles.info}>Spirit: O Corcel Indomável </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  info: {
    fontSize: 18,
    marginBottom: 10,
  },
});
