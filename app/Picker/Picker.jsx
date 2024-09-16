import React, { useState } from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function Seletor() {
    const [pokemon, setPokemon] = useState('');
    const lista_pokemons = [
        { nome: 'Pikachu', value: 'pikachu' },
        { nome: 'Bulbasaur', value: 'bulbasaur' },
        { nome: 'Charmander', value: 'charmander' },
        { nome: 'Squirtle', value: 'squirtle' }
    ];

    return (
        <ImageBackground 
            source={{ uri: 'https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/noticias-cine/como-viven-los-pokemon-dentro-de-las-pokeballs/117318589-1-esl-ES/Como-viven-los-Pokemon-dentro-de-las-Pokeballs.jpg?crop=1xw:0.9201277955271565xh;center,top&resize=1200:*' }} 
            style={styles.backgroundImage}
        >
            <View style={styles.container}>
                <Text style={styles.title}>Selecione um Pokémon</Text>
                <Picker
                    selectedValue={pokemon}
                    onValueChange={(itemValue) => setPokemon(itemValue)}
                    style={styles.picker}
                >
                    <Picker.Item label="Selecione um Pokémon" value="" />
                    {lista_pokemons.map((item, index) => (
                        <Picker.Item key={index} label={item.nome} value={item.value} />
                    ))}
                </Picker>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        color: '#FF9900', 
        marginBottom: 20,
        fontWeight: 'bold',
    },
    picker: {
        width: '80%',
        color: '#FFFFFF', 
        backgroundColor: '#232F3E',
        borderRadius: 5,
    },
});
