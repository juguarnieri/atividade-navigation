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
            <Text style={styles.description}>
                Tecnologias utilizadas:
            </Text>
            <View style={styles.list}>
                <Text style={styles.listItem}>• React Native</Text>
                <Text style={styles.listItem}>• Expo Router</Text>
                <Text style={styles.listItem}>• Componentes estilizados</Text>
                <Text style={styles.listItem}>• Ícones do Expo Vector Icons</Text>
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
        backgroundColor: '#f0f8ff',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#1E90FF',
        marginBottom: 20,
        textAlign: 'center',
    },
    description: {
        fontSize: 16,
        color: '#555',
        textAlign: 'center',
        marginBottom: 15,
        lineHeight: 22,
    },
    list: {
        marginBottom: 20,
        alignItems: 'flex-start',
    },
    listItem: {
        fontSize: 16,
        color: '#555',
        marginBottom: 5,
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