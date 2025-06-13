import { router, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { Alert, Button, View } from 'react-native';
import CaixaEntrada from '../../components/CaixaEntrada';
import { atualizarProduto, inserirProdutos } from '../../components/database/BancoCompras';

export default function produto() {
  const [id, setId] = useState("");
  const [produto, setProduto] = useState("");
  const [preco, setPreco] = useState("");
  const [quant, setQuant] = useState("");

  const { ident, nome, valor, quantidade } = useLocalSearchParams();

  useEffect(() => {
    setId(ident)
    setProduto(nome)
    setPreco(valor)
    setQuant(quantidade)
  }, [ident, nome, valor, quantidade])

  async function gravarProduto() {
    if (id) {
      if ((produto) && (preco) && (quant)) {
        await atualizarProduto(id, produto, preco, quant)
        console.log("Produto atualizado")
        //voltar a tela da listagem
        //passar o parametro do obj modificado 
      }
    }
    else if ((produto) && (preco) && (quant)) {
      let precoNum = parseFloat(preco)
      let quantNum = parseInt(quant)
      let newID = await inserirProdutos(produto, precoNum, quantNum);
      console.log("inserirProdutos", newID);
      if (newID) {
        router.back()
        router.setParams({
          editado: JSON.stringify({
            newID,
            produto,
            preco,
            quant
          })
        })
        // router.push({pathname: "/lista", params: {"id": id, "produto": produto, "preco": preco, "quant": quant}})
      }
    } else {
      Alert.alert("Preencha todos os campos.")
    }
  }

  function voltarComParametros() {
    router.setParams( JSON.stringify( {
      ident: id,
      nome: produto,
      valor: preco,
      quantidade: quant
    } ))
    router.back()
    // router.push({
    //   pathname: "/lista",
    //   params: {
    //     ident: id,
    //     nome: produto,
    //     valor: preco,
    //     quantidade: quant
    //   }
    // })
  }

  return (
    <View>
 
      <CaixaEntrada
        titulo="Produto"
        dica="Digite o produto"
        funcao={setProduto}
        tipoTeclado='default'
        valor={produto} />

 
      <CaixaEntrada
        titulo="Preço"
        dica="Digite o preço"
        funcao={setPreco}
        tipoTeclado='numeric'
        valor={preco} />


      <CaixaEntrada
        titulo="Quantidade"
        dica="Digite a quantidade"
        funcao={setQuant}
        tipoTeclado='numeric'
        valor={quant} />

      <View
        style={{ marginTop: 20 }}>
        <Button
          title='Gravar informações'
          onPress={gravarProduto}
        />

        <Button
          title='TESTE back'
          onPress={voltarComParametros}
        />

      </View>
    </View>
  )
}

