import { useRouter } from 'expo-router';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

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

            <Button
                title='Ir para detalhes'
                onPress={() => router.push('/detalhes')}>
            </Button>
            <text>
                ou
            </text>
            <Button
                title='Reproduzir um áudio motivação'
                onPress={(function () {
                    if (tocando == false) {
                        audio.play();
                        tocando = true;
                    } else {
                        audio.pause();
                        tocando = false
                    }
                })
                }>
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