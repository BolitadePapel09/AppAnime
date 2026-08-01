import { Tabs } from "expo-router";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >

      <Tabs.Screen 
        name="index" 
        options={{ 
          title: "Inicio" 
        }} 
      />

      <Tabs.Screen 
        name="manga" 
        options={{ 
          title: "Manga" 
        }} 
      />

      <Tabs.Screen 
        name="usuario" 
        options={{ 
          title: "Usuario" 
        }} 
      />

    </Tabs>
  )
}

export default TabsLayout;