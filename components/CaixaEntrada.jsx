import { StyleSheet, Text, TextInput, View } from 'react-native'

export default function CaixaEntrada(props) {
  return (
    <View>
      <Text>{props.titulo}</Text>
      <TextInput
        style={estilos.caixa}
        placeholder= {props.dica ? props.dica : ''}
        onChangeText={ props.funcao }
        keyboardType= {props.tipoTeclado}
      />
    </View>
  )
}

const estilos = StyleSheet.create({
  caixa: {
    borderColor: 'black',
    borderWidth: 3,
    backgroundColor: 'lightgreen',
    marginTop: 5
  }
})