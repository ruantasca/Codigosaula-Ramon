import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function Calculadora() {
    const [number, onChangeText] = useState('');
    const [operador, setOperador] = useState('');
    const [resultado, setResultado] = useState('');

    const soma = () => {
        setResultado(Number(number) + Number(operador));
    };

    const subtracao = () => {
        setResultado(Number(number) - Number(operador));
    };

    const multiplicacao = () => {
        setResultado(Number(number) * Number(operador));
    };

    const divisao = () => {
        setResultado(Number(number) / Number(operador));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>CALCULADORA</Text>

            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={number}
                placeholder='Insira o número aqui'
                keyboardType='numeric'
            />

            <TextInput
                style={styles.input}
                onChangeText={setOperador}
                value={operador}
                placeholder='Insira o operador aqui'
                keyboardType='numeric'
            />

            <View style={styles.buttonContainer}>
                <Button
                    title='+'
                    onPress={soma}
                    color="#FF9900" 
                />
                <Button
                    title='-'
                    onPress={subtracao}
                    color="#FF9900" 
                />
                <Button
                    title='x'
                    onPress={multiplicacao}
                    color="#FF9900" 
                />
                <Button
                    title='/'
                    onPress={divisao}
                    color="#FF9900" 
                />
            </View>

            <Text style={styles.result}>O valor é {resultado}</Text>
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
    input: {
        height: 40,
        borderColor: '#FF9900', 
        borderWidth: 1,
        width: '80%',
        marginBottom: 20,
        paddingHorizontal: 10,
        backgroundColor: '#ffffff', 
        color: '#232F3E', 
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%',
        marginBottom: 20,
    },
    result: {
        fontSize: 18,
        color: '#ffffff', 
        marginTop: 20,
    },
});
