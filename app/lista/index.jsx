import { useEffect, useState } from 'react'
import { FlatList, Text, View } from 'react-native'
import { listarProdutos } from '../../components/database/BancoCompras'

export default function index() {

  const [produtos, setProdutos] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await listarProdutos();
      setProdutos(data);
    }
    fetchData().then(() => console.log("deu certo"))
      .catch((erro) => { console.log(erro) })
  }, [])

  return (
    <View>
      <Text>lista de produtos</Text>
      <FlatList
        data={produtos}
        renderItem={({ item, index }) => (
          <View>
            <Text key={index}>{item.produto}</Text>
            <Text>{item.preco}</Text>
          </View>
        )}
      />
    </View>
  )

}