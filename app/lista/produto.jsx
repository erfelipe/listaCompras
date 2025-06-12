import { router, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { Alert, Button, Text, View } from 'react-native';
import CaixaEntrada from '../../components/CaixaEntrada';
import { inserirProdutos } from '../../components/database/BancoCompras';

export default function produto() {
  const [id, setId] = useState("");
  const [produto, setProduto] = useState("");
  const [preco, setPreco] = useState("");
  const [quant, setQuant] = useState("");

  const {ident, nome, valor, quantidade} = useLocalSearchParams() ;

  useEffect( () => {
    console.log("chegou?", ident)
    console.log("chegou?", nome)
    console.log("chegou?", valor)
    console.log("chegou?", quantidade)
    setId(ident)
    setProduto(nome)
    setPreco(valor)
    setQuant(quantidade)
  }, [ident, nome, valor, quantidade])

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

  function voltarComParametros() {
    router.back()
    router.setParams({"chave": "valor", "nome": produto})
  }

  return (
    <View>
      <Text>{produto}</Text>
      <CaixaEntrada
        titulo="Produto"
        dica="Digite o produto"
        funcao={setProduto}
        tipoTeclado='default'
        valor={produto} />

      <Text>{preco}</Text>
      <CaixaEntrada
        titulo="Preço"
        dica="Digite o preço"
        funcao={setPreco}
        tipoTeclado='numeric'
        valor={preco} />

      <Text>{quant}</Text>
      <CaixaEntrada
        titulo="Quantidade"
        dica="Digite a quantidade"
        funcao={setQuant}
        tipoTeclado='numeric'
        valor={quant} />

      <View
        style={{marginTop: 20}}>
        <Button
          title='Gravar informações'
          onPress={ gravarNovoProduto }
        />

        <Button 
          title='TESTE back'
          onPress={ voltarComParametros }
        />

      </View>
    </View>
  )
}

