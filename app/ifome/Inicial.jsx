import React from 'react';
import { View, Text, FlatList, Button, Image, StyleSheet } from 'react-native';
import { useLancheContext } from './LancheContext';


const snacks = [
    { id: '1', name: 'Hambúrguer', price: 10, image: 'https://www.estadao.com.br/resizer/v2/L3LYN5Y4MRG6BB47MNHEEXDRGA.jpeg?quality=80&auth=c4f56563b2c83e506971bce35dbc505a5ecdf7d89a70d2f2c5fbb8b0c7071e5f&width=720&height=503&smart=true' },
    { id: '2', name: 'Pizza', price: 15, image: 'https://pizzapoint.com.br/wp-content/uploads/2024/05/pizza.png' },
    { id: '3', name: 'Batata Frita', price: 5, image: 'https://i.panelinha.com.br/i1/228-bk-7993-batata-frita-tradicional.webp' },
];

const Inicial = ({ navigation }) => {
    const { addToCart } = useLancheContext();

    const handleAddToCart = (snack) => {
        addToCart(snack);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Selecione seu Lanche</Text>
            <FlatList
                data={snacks}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.snackContainer}>
                        <Image source={{ uri: item.image }} style={styles.image} />
                        <Text style={styles.snackText}>{item.name} - R$ {item.price}</Text>
                        <Button
                            title="Adicionar"
                            onPress={() => handleAddToCart(item)}
                            color="#FF9900" 
                        />
                    </View>
                )}
            />
            <Button
                title="Ir para o Carrinho"
                onPress={() => navigation.navigate('Carrinho')}
                color="#232F3E" 
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
        backgroundColor: '#f3f3f3', 
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
    },
    snackContainer: {
        alignItems: 'center',
        marginBottom: 20,
        padding: 5,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        backgroundColor: '#fff', 
    },
    image: {
        width: 80, 
        height: 80,
        marginBottom: 8,
        resizeMode: 'contain',
    },
    snackText: {
        fontSize: 16,
        marginBottom: 8,
    },
});

export default Inicial;
