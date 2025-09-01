import {Button, Text, View, StyleSheet, ScrollView, useAnimatedValue, Alert} from "react-native";
import Header from "../components/Header";
import FormCadastro from "../components/FormCadastro";
import BtnCont from "../components/BtnCont";
import sizes from "../design/sizes";
import colors from "../design/colors";
import EmptyList from "../components/EmptyList";
import Search from "../components/Search";
import Card from "../components/Card";
import {useNavigation} from "@react-navigation/native";
import {useEffect, useState} from "react";

export default function HomeScreen() {
    const [lista , setLista] = useState([])
    const [totalCriado , setTotalCriado] = useState(0)
    const [totalConcluido, setTotalConcluido] = useState(0)
    const [textCadastro, setTextCadastro] = useState("")
    const [textFiltro , setTextFiltro] = useState("")

    useEffect(() => {
        // Total de tarefas concluidas
        var totalConcluidos = lista.filter(function (item) {
            return item.concluido
        })

        var totalNaoConcluidos = lista.filter(function (item) {
            if (item.concluido === true) {
                return item.concluido
            }
        })

        setTotalConcluido(totalConcluidos.length)
        setTotalCriado(totalNaoConcluidos.length)

    }, [lista]);

    function cadastrarTarefa(){
        var listaAux = [...lista]

        if(textCadastro.trim() === ""){
            Alert.alert("Impossível cadastrar tarefa vazia.");
            return false;
        }

        var jaExiste = listaAux.find(function (item) {
            if (item.titulo.toLowerCase() === textCadastro.toLowerCase()) {
                return true
            }
            return false
        });

        if (jaExiste) {
            Alert.alert("Essa tarefa já existe.")
            return false;
        }

        listaAux.push({
            titulo: textCadastro,
            concluido: false
        })

        console.log(listaAux)

        setTextCadastro("")
        setLista(listaAux)
    }

    function concluirTarefa(index){
        var listaAux = [...lista]

        setLista(listaAux)

        listaAux[index].concluido = !listaAux[index].concluido
    }

    function excluirTarefa(index){
        var listaAux = [...lista]
        listaAux.splice(index, 1)
        setLista(listaAux)
    }

    return (
        <ScrollView>
            <Header />
            <FormCadastro fnCadastrar={cadastrarTarefa} texto={textCadastro} setTexto={setTextCadastro} />

            <View style={styles.containerBotoes}>
                <BtnCont titulo={"Tarefas Criadas"} numero={totalCriado}/>
                <BtnCont titulo={"Concluídas"} numero={totalConcluido} eVerde={true}/>
            </View>

            <Search texto={textFiltro} setTexto={setTextFiltro} />

            {lista.length === 0 && <EmptyList/>}

            {lista
                .sort(function (a, b) {
                    return a.concluido - b.concluido
                })
                .map(function (item, index) {
                if (item.titulo.toLowerCase().includes(textFiltro.toLowerCase())) {
                    return (
                        <Card key={index}
                              texto={item.titulo}
                              ativo={item.concluido}
                              fnConcluir={() => concluirTarefa(index)}
                              fnExcluir={() => excluirTarefa(index)}
                        />
                    )
                }
            } )}
        </ScrollView>
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