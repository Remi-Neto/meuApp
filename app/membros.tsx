import { useRouter } from 'expo-router';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

export default function Detalhes() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/maeanjo.jpeg')}
                style={{ width: 200, height: 200 }}
            />
            <Text>
                Membros da família
            </Text>

            <Text>
                Ivan, Thomaz, Jane, Priscila, Rodrigo, Janaira
            </Text>

            <Button
            title='Index'
            onPress={() => router.push('/detalhes')}>
            </Button>



        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});