import {TextInput, View, StyleSheet} from "react-native";
import sizes from "../design/sizes";
import {c} from "react/compiler-runtime";
import colors from "../design/colors";

export default function Search({texto, setTexto}) {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder={"Busque por tarefas"}
                onChangeText={setTexto}
                value={texto}></TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: sizes.margin_horizontal,
        marginVertical: sizes.size_medium,
    },

    input: {
      backgroundColor: colors.white,
      fontSize: sizes.size_medium,
      padding: sizes.padding_medium,
      color: colors.gray_500,
      borderRadius: sizes.border_radius,
      borderColor: colors.gray_330,
      borderWidth: 1,
      elevation: 3,
    }
})