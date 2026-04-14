import { useRouter } from 'expo-router';
import { Image, StyleSheet, Text, View } from 'react-native';

var tocando = false;

export default function Detalhes() {
    const router = useRouter();
    const audio = new Audio('../assets/audio/tipolutador.mp3')

    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/maeanjo.jpeg')}
                style={{ width: 260, height: 300 }}
            />
            <Text>
                Membros da família
            </Text>

            <Text>
                Ivan, Thomaz, Jane, Priscila, Rodrigo, Janaira
            </Text>
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