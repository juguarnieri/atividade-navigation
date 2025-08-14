import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function Sobre() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sobre o App</Text>
            <Text style={styles.description}>
                Este aplicativo foi desenvolvido para demonstrar as funcionalidades do React Native, incluindo navegação entre telas, exibição de listas e formulários interativos.
            </Text>
            <Text style={styles.description}>
                O objetivo principal é oferecer uma experiência simples, intuitiva e responsiva para os usuários, com um design moderno e acessível.
            </Text>
            <Text style={styles.subtitle}>Tecnologias Utilizadas:</Text>
            <View style={styles.list}>
                <Text style={styles.listItem}>🌟 React Native</Text>
                <Text style={styles.listItem}>🚀 Expo Router</Text>
                <Text style={styles.listItem}>🎨 Componentes estilizados</Text>
                <Text style={styles.listItem}>✨ Ícones do Expo Vector Icons</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => router.push('/')}>
                <Text style={styles.buttonText}>Voltar para Home</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e6f7ff', 
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#007acc', 
        marginBottom: 20,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#00509e', 
        marginTop: 20,
        marginBottom: 10,
        textAlign: 'center',
    },
    description: {
        fontSize: 16,
        color: '#333',
        textAlign: 'center',
        marginBottom: 15,
        lineHeight: 24,
    },
    list: {
        marginBottom: 20,
        alignItems: 'flex-start',
        width: '90%',
    },
    listItem: {
        fontSize: 16,
        color: '#444',
        marginBottom: 8,
        lineHeight: 22,
    },
    button: {
        backgroundColor: '#007acc', 
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 8,
        marginTop: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});