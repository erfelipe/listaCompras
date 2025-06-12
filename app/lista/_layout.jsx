import { AntDesign } from "@expo/vector-icons";
import { router, Stack } from "expo-router";
import { View } from 'react-native';

export default function Pilha() {
  return (
    <Stack screenOptions={{ headerShown: true, }}>
      <Stack.Screen
        name="index"
        options={{
          title: "Lista de Compras",
          headerRight: () => (
            <View
             style={{ width: 50, height: 50 }}>
              <AntDesign
                name="shoppingcart"
                size={46}
                color="green"
                onPress={() => router.push('/lista/produto')}
                 />
            </View>)
        }} />
      <Stack.Screen name="produto" options={{ title: "Produto" }} />
    </Stack>
  )
} 
