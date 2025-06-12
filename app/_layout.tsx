import { Tabs } from "expo-router";

export default function TabBar() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index" />
      <Tabs.Screen name="lista" />

    </Tabs>
  )
} 
