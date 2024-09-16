import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Urubici = 'https://visiteaserrasc.com.br/painel/img/vserrasc_site/6_cidades_14253.jpg';
const Chapecó = 'https://blog.mobg.com.br/content/images/2024/07/chapeco-mobg--1-.jpg';
const Parana = 'https://www.destino.foz.br/wp-content/uploads/2022/01/002-%E2%80%93-Cataratas-do-Iguacu-e1663260066395.jpg';

export default function ViagensScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Minhas Viagens</Text>
      <View style={styles.content}>
        <Image source={{ uri: Urubici }} style={styles.image} />
        <Text style={styles.info}>Urubici, muito louco, lá é frio.</Text>
        
        <Image source={{ uri: Chapecó }} style={styles.image} />
        <Text style={styles.info}>Chapecó, gente boa, o povo é legal.</Text>
        
        <Image source={{ uri: Parana }} style={styles.image} />
        <Text style={styles.info}>Paraná, muito plano, lugar bom de morar.</Text>
      </View>
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
  content: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
    paddingHorizontal: 20,
  },
  image: {
    width: 200,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  info: {
    fontSize: 18,
    color: '#FFFFFF', 
    marginBottom: 20,
    textAlign: 'center',
  },
});
