import {TextInput, TouchableOpacity, View, StyleSheet, Image} from "react-native";
import colors from "../design/colors";
import sizes from "../design/sizes";

export default function FormCadastro({ fnCadastrar, texto, setTexto }) {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input}
                       onChangeText={setTexto} value={texto}
                       placeholder={"Adicionar uma nova tarefa"} />

            <TouchableOpacity onPress={fnCadastrar}
                              style={styles.btn}>

                <Image style={styles.img}
                       source={require('../assets/add.png')} />
            </TouchableOpacity>
        </View>
    )

}


const styles = StyleSheet.create({

    container: {
        marginTop: -35,
        flexDirection: "row",
        gap: 10,
        height: 70,
        marginHorizontal: sizes.margin_horizontal,
    },

    input : {
        backgroundColor: colors.white,
        borderWidth: 1,
        borderColor: colors.gray_330,
        borderRadius: sizes.border_radius,
        color: colors.gray_500,
        fontSize: sizes.size_title,
        padding: sizes.padding_medium,
        width: '80%',
    },

    btn: {
        backgroundColor: colors.purple_dark,
        borderRadius: sizes.border_radius,
        width: '18%',
        justifyContent: "center",
        alignItems: "center",
        elevation: 2,
    },

    img: {
        width: 25,
        height: 25,
        resizeMode: "contain",
    }
})