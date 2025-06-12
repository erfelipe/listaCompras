import { router, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { Alert, Button, Text, View } from 'react-native';
import CaixaEntrada from '../../components/CaixaEntrada';
import { inserirProdutos } from '../../components/database/BancoCompras';

export default function produto() {
  const [produto, setProduto] = useState("");
  const [preco, setPreco] = useState("");
  const [quant, setQuant] = useState("");

  const {p} = useLocalSearchParams();

  useEffect( () => {
    console.log("chegou?", p)
  }, [p])

  function gravarNovoProduto() {
    if ( (produto) && (preco) && (quant) ) {
      let precoNum = parseFloat(preco)
      let quantNum = parseInt(quant)
      let id = inserirProdutos(produto, precoNum, quantNum);
      console.log(id);
      if (id) {
        Alert.alert("Produto inserido.");
        router.push({pathname: "lista/index", params: {"id": id, "produto": produto, "preco": preco, "quant": quant}})
      }
    } else {
      Alert.alert("Preencha todos os campos.")
    }
  }

  return (
    <View>
      <Text>{produto}</Text>
      <CaixaEntrada
        titulo="Produto"
        dica="Digite o produto"
        funcao={setProduto}
        tipoTeclado='default' />

      <Text>{preco}</Text>
      <CaixaEntrada
        titulo="Preço"
        dica="Digite o preço"
        funcao={setPreco}
        tipoTeclado='numeric' />

      <Text>{quant}</Text>
      <CaixaEntrada
        titulo="Quantidade"
        dica="Digite a quantidade"
        funcao={setQuant}
        tipoTeclado='numeric' />

      <View
        style={{marginTop: 20}}>
        <Button
          title='Gravar informações'
          onPress={ gravarNovoProduto }
        />
      </View>
    </View>
  )
}

