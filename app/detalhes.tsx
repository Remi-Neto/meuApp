import { useRouter } from 'expo-router';
import { Button, Text, View } from 'react-native';

export default function Detalhes() {
    const router = useRouter();

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>📄 Tela de Detalhes</Text>

            <Button
                title="voltar"
                onPress={() => router.push('/detalhes')}>
            </Button>
        </View>
    );
}