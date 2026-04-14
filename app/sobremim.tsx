import { useRouter } from 'expo-router';
import { Text, View } from 'react-native';

export default function Detalhes() {
    const router = useRouter();

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>📄 Tela de Detalhes</Text>
        </View>
    );
}