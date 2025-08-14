import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const Contato = () => {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Fale Conosco</Text>
            <TextInput 
                style={styles.input} 
                placeholder="Seu nome" 
                placeholderTextColor="#aaa"
            />
            <TextInput 
                style={styles.input} 
                placeholder="Seu e-mail" 
                keyboardType="email-address" 
                placeholderTextColor="#aaa"
            />
            <TextInput 
                style={styles.textArea} 
                placeholder="Sua mensagem" 
                multiline 
                numberOfLines={4} 
                placeholderTextColor="#aaa"
            />
            <TouchableOpacity style={styles.button} onPress={() => alert('Mensagem enviada!')}>
                <Text style={styles.buttonText}>Enviar</Text>
            </TouchableOpacity>

            {/* Botão para voltar à página inicial */}
            <TouchableOpacity style={styles.backButton} onPress={() => router.push('/')}>
                <Text style={styles.buttonText}>Voltar para Home</Text>
            </TouchableOpacity>
        </View>
    );
};

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
    input: {
        height: 50,
        width: '90%',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 15,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
    },
    textArea: {
        height: 100,
        width: '90%',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 15,
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: '#fff',
        textAlignVertical: 'top',
    },
    button: {
        backgroundColor: '#1E90FF',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 8,
        marginTop: 10,
        width: '90%',
        alignItems: 'center',
    },
    backButton: {
        backgroundColor: '#4682B4',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 8,
        marginTop: 15,
        width: '90%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Contato;