import { Button, View } from 'react-native'
import CaixaEntrada from '../../components/CaixaEntrada'

export default function produto() {
  return (
    <View>
      <CaixaEntrada
        titulo="Produto"
        dica="Digite o produto"
        funcao={() => { }} />

      <CaixaEntrada
        titulo="Preço"
        dica="Digite o preço"
        funcao={() => { }} />

      <CaixaEntrada
        titulo="Preço"
        dica="Digite o preço"
        funcao={() => { }} />

      <View
        style={{marginTop: 20}}>
        <Button
          title='Gravar informações'
        />
      </View>
    </View>
  )
}

