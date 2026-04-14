import { useRouter } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';

var tocando = false;

export default function Refrao() {
    const router = useRouter();
    const TLutador = new Audio('../assets/audio/tipolutador.mp3');
    const PapelRei = new Audio('../assets/audio/papeldeumrei.mp3');


    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Button
                    title="Tipo Lutador | Chrono"
                    onPress={function () {
                        if (tocando == false) {
                            TLutador.play();
                            tocando = true;
                        } else {
                            TLutador.pause();
                            tocando = false;
                        }
                    }}
                />

                <Text style={styles.text}>|</Text>

                <Button //"Tipo Lutador |Chrono"
                    title='PapelDeUmRei |PDBata'
                    onPress={function () {
                        if (tocando == false) {
                            PapelRei.play();
                            tocando = true;
                        } else {
                            PapelRei.pause();
                            tocando = false;
                        }
                    }}></Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row', // deixa lado a lado
        alignItems: 'center',
    },
    text: {
        marginHorizontal: 10,
    },
});