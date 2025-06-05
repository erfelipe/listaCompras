import { View } from 'react-native'
import CaixaEntrada from '../../components/CaixaEntrada'

export default function produto() {
  return (
    <View>
      <CaixaEntrada 
        titulo="Produto" 
        dica="Digite o produto"
        funcao= {() => {}} />
      
      <CaixaEntrada 
        titulo="Produto" 
        dica="Digite o produto"
        funcao= {() => {}} />
    </View>
  )
}

