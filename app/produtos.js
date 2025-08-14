import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';

const produtos = [
    { id: '1', name: 'Produto 1', icon: 'shopping-cart' },
    { id: '2', name: 'Produto 2', icon: 'store' },
    { id: '3', name: 'Produto 3', icon: 'local-offer' },
    { id: '4', name: 'Produto 4', icon: 'home' },
    { id: '5', name: 'Produto 5', icon: 'star' },
    { id: '6', name: 'Produto 6', icon: 'favorite' },
    { id: '7', name: 'Produto 7', icon: 'settings' },
    { id: '8', name: 'Produto 8', icon: 'phone' },
    { id: '9', name: 'Produto 9', icon: 'camera' },
    { id: '10', name: 'Produto 10', icon: 'laptop' },
];

const Produtos = () => {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Lista de Produtos</Text>
            <FlatList
                data={produtos}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.productContainer}>
                        <MaterialIcons name={item.icon} size={40} color="#1E90FF" />
                        <Text style={styles.productName}>{item.name}</Text>
                    </View>
                )}
            />
            <TouchableOpacity style={styles.button} onPress={() => router.push('/')}>
                <Text style={styles.buttonText}>Voltar para Página Inicial</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f0f8ff',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#1E90FF',
        marginBottom: 20,
        textAlign: 'center',
    },
    productContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        marginBottom: 10,
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    productName: {
        fontSize: 18,
        marginLeft: 15,
        color: '#333',
    },
    button: {
        backgroundColor: '#1E90FF',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 8,
        marginTop: 20,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Produtos;