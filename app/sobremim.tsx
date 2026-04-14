import { useRouter } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function Detalhes() {
    const router = useRouter();

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={styles.text}>📄 Tela de Detalhes</Text>
            <text> Oi, sou o Remi Neto, tenho 19 anos </text>
            <text> Estou cursando Análise e Desenvolvimento de Sistemas (ADS) em Florianópolis na UniSul </text>
            <text> Antes eu estava em São Paulo Capital cursando ADS na Impacta, onde concluí 2°semestres antes de vim pra Floripa </text>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        marginVertical:13,
    },
});