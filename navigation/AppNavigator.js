import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Advertencias from "../screens/advertencias";
import Aracnido from "../screens/categorias/aracnido-individual";
import AvistCategoria from "../screens/formularios/avist-categoria";
import colors from "../config/colors";
import Categorias from "../screens/categorias/categorias-menu";
import Quizzes from "../screens/quizzes/quiz";
import Guias from "../screens/guias/guias-menu";
import Menu from "../screens/menu";
import AcercaDe from "../screens/acercaDe";

const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerTintColor: colors.verdeOscuro,
      headerTitleAlign: "center",
    }}
  >
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
    <Stack.Screen name="Guias" component={Guias}></Stack.Screen>
    <Stack.Screen name="Quizzes" component={Quizzes}></Stack.Screen>
    <Stack.Screen
      name="AcercaDe"
      component={AcercaDe}
      options={{ headerTitle: "Acerca de" }}
    ></Stack.Screen>
    <Stack.Screen name="Aracnido" component={Aracnido}></Stack.Screen>
    <Stack.Screen
      name="AvistCategoria"
      component={AvistCategoria}
      options={{ headerTitle: "Avistamiento" }}
    ></Stack.Screen>
  </Stack.Navigator>
);

export default AppNavigator;
