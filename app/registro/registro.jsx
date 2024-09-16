import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Pressable } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#232F3E', 
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    input: {
        borderColor: '#FF9900', 
        width: '80%',
        margin: 10,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        fontSize: 18,
        backgroundColor: '#e5e9ea', 
        color: '#232F3E', 
    },
    title: {
        fontSize: 42,
        fontWeight: 'bold',
        color: '#FF9900', 
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#FF9900', 
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
        width: '80%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#232F3E', 
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default function SignUp() {
    const [email, setEmail] = useState('');
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');

    const registrarUsuario = () => {
        console.log(nome, email, senha);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.title}>Registro</Text>
            </View>
            <View>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    placeholder="Insira o seu email aqui"
                    placeholderTextColor="#232F3E" 
                />
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => setNome(text)}
                    value={nome}
                    placeholder="Insira o seu nome aqui"
                    placeholderTextColor="#232F3E" 
                />
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => setSenha(text)}
                    value={senha}
                    placeholder="Insira a sua senha aqui"
                    secureTextEntry={true}
                    placeholderTextColor="#232F3E" 
                />
            </View>
            <View>
                <Pressable style={styles.button} onPress={registrarUsuario}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
}
