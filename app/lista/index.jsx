import { router, useLocalSearchParams } from 'expo-router'
import { useEffect, useState } from 'react'
import { Alert, Button, FlatList, Text, TouchableHighlight, View } from 'react-native'
import { excluirProduto, listarProdutos } from '../../components/database/BancoCompras'

export default function index() {

  const [produtos, setProdutos] = useState([])

  const { ident, nome, valor, quantidade } = useLocalSearchParams();

  useEffect(() => {
    console.log("useEffect do index")
    console.log("Prod", nome)
    // setId(ident)
    // setProduto(nome)
    // setPreco(valor)
    // setQuant(quantidade)
  }, [ident, nome, valor, quantidade])

  useEffect(() => {
    const fetchData = async () => {
      const data = await listarProdutos();
      setProdutos(data);
    }
    fetchData().then(() => console.log("deu certo"))
      .catch((erro) => { console.log(erro) })
  }, [])

  function excluirItem(id, produto) {
    if (id) {
      Alert.alert('Atenção', 'Deseja excluir o item: ' + produto, [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK', onPress: () => {
            let quantApagados = excluirProduto(id);
            console.log("quantapagados:", quantApagados)
            //tirar do array
            let copia = produtos
            copia = copia.filter((item) => item.id != id)
            setProdutos(copia)
          }
        },
      ]);
    }
  }

  function editarItem(item) {
    if (item) {
      router.push({
        pathname: "/lista/produto",
        params: {
          ident: item.id,
          nome: item.produto,
          valor: item.preco,
          quantidade: item.quantidade
        }
      })
    }
  }

  return (
    <View>
      <Text>lista de produtos</Text>
      <FlatList
        data={produtos}
        renderItem={({ item, index, separators }) => (
          <TouchableHighlight
            key={item.key}
            onPress={() => { }}
            onShowUnderlay={separators.highlight}
            onHideUnderlay={separators.unhighlight}>
            <View style={{ backgroundColor: 'white' }}>
              <Text>{item.produto} {item.preco} </Text>
              <Button
                title='apagar'
                onPress={() => excluirItem(item.id, item.produto)}>
              </Button>
              <Button
                title='editar'
                onPress={() => editarItem(item)}>
              </Button>
            </View>
          </TouchableHighlight>
        )}
      />
    </View>
  )

}