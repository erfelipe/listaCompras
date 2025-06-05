import { Tabs } from "expo-router";

export default function Pilha() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index" />
      <Tabs.Screen name="lista" />
      <Tabs.Screen name="+not-found"  />
    </Tabs>
  )
} 
