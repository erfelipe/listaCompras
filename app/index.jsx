import { useEffect } from 'react';
import { Button, Image, View } from 'react-native';
import { criarBanco, inserirProdutos } from '../components/database/BancoCompras';

export default function index() {

  useEffect(() => {
    criarBanco()
      .then(() => console.log("banco criado."))
      .catch((erro) => console.log(erro))
  }, [])

  return (
    <View>
      <Button
        title='inserir registro exemplo'
        onPress={() => inserirProdutos("arroz", 123.50, 2).then(()=> console.log("registro inserido"))}
      />
      <Image source={require('../assets/images/lista-img.jpg')}
      />
    </View>
  )
} 