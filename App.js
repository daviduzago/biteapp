import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import Menu from "./screens/menu";
import Advertencias from "./screens/advertencias";
import Categorias from "./screens/categorias/categorias-menu";
import Aracnido from "./screens/categorias/aracnido-individual";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Advertencias"
        component={Advertencias}
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="Menu"
        component={Menu}
        options={{ headerShown: false, gestureEnabled: false }}
      ></Stack.Screen>
      <Stack.Screen name="Categorias" component={Categorias}></Stack.Screen>
      <Stack.Screen name="Aracnido" component={Aracnido}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});
