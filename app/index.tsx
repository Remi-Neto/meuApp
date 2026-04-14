import { useRouter } from 'expo-router';
import { Text, View } from 'react-native';

export default function Home() {
    const router = useRouter();

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text> 🏠 Tela Home </Text>

        </View>
    );
}