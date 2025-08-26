import {Text, TouchableOpacity, View, StyleSheet} from "react-native";
import sizes from "../design/sizes";
import colors from "../design/colors";

export default function BtnCont() {
    return (
        <TouchableOpacity style={styles.botao}>
            <Text style={styles.titulo}>Tarefas Criadas</Text>
            <View style={styles.circulo}>
                <Text style={styles.num}>12</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    botao: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        justifyContent: 'center',
    },

    titulo: {
        fontsize: sizes.size_medium,
        color: colors.gray_500,
        fontWeight: 'bold',
    },

    circulo: {
        width: 30,
        height: 30,
        backgroundColor: colors.purple_light,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: sizes.border_circle,
    },

    num: {
       fontSize: sizes.size_cont,
        color: colors.purple_dark,
        fontWeight: 'bold',
    }
})