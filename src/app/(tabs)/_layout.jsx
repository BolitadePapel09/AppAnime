import { Tabs } from "expo-router";

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{
      headerShown: false,
    }} > 
    <Tabs.Screen name="index" options={{ title: "Inicio" }} />
    <Tabs.Screen name="login" options={{ title: "Login" }} />
    <Tabs.Screen name="InfoAnime" options={{ title: " Info Anime" }} />
    <Tabs.Screen name="manga" options={{ title: "Manga" }} />
      
    </Tabs>
  )
}

export default TabsLayout;