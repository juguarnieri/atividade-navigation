import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bem-vindo ao App</Text>
            <Text style={styles.subtitle}>Escolha uma das opções abaixo:</Text>

            <View style={styles.buttonGroup}>
                <Link href="/contato" style={styles.link}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Ir para Contato</Text>
                    </TouchableOpacity>
                </Link>

                <Link href="/produtos" style={styles.link}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Ir para Produtos</Text>
                    </TouchableOpacity>
                </Link>

                <Link href="/sobre" style={styles.link}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Ir para Sobre</Text>
                    </TouchableOpacity>
                </Link>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#f0f8ff',
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#1E90FF',
        marginBottom: 10,
        textAlign: 'center', 
    },
    subtitle: {
        fontSize: 18,
        color: '#555',
        marginBottom: 20,
        textAlign: 'center',
    },
    buttonGroup: {
        width: '100%',
        alignItems: 'center', 
    },
    link: {
        marginBottom: 15,
    },
    button: {
        backgroundColor: 'lightblue',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 8,
        width: 250, 
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});