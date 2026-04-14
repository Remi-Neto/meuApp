import { useRouter } from 'expo-router';
import { Button, Text, View } from 'react-native';

export default function Home() {
    const router = useRouter();

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text> 🏠 Tela Home </Text>
            <Button
                title='Ir para Detalhes'
                onPress={() => router.push('/detalhes')}></Button>
            <Text>
                ----
            </Text>
            <Button
                title='Ir para Membros'
                onPress={() => router.push('/membros')}></Button>
            <Text>
                ----
            </Text>
            <Button
                title='Ir para Refrao'
                onPress={() => router.push('/refrao')}>
                </Button>

        </View>
    );
}