import {Button, Text, View, StyleSheet} from "react-native";
import Header from "../components/Header";
import FormCadastro from "../components/FormCadastro";
import BtnCont from "../components/BtnCont";
import sizes from "../design/sizes";
import colors from "../design/colors";

export default function (HomeScreen) {
    return (
        <>
            <Header />
            <FormCadastro/>

            <View style={styles.containerBotoes}>
                <BtnCont/>
                <BtnCont/>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    containerBotoes: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: sizes.margin_horizontal,
        marginTop: sizes.padding_large,
        paddingBottom: sizes.padding_large,
        borderBottomWidth: 2,
        borderBlockColor: colors.gray_330,
    }
})