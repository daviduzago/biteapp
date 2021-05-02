import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Arañas from "../categorias/categorias-arañas";
import Escorpiones from "../categorias/categorias-escorpiones";
import colors from "../../config/colors";

const Tab = createBottomTabNavigator();

function CategoriasMenu() {
  return (
    <SafeAreaView style={styles.container}>
      <Tab.Navigator
        tabBarOptions={{
          activeBackgroundColor: colors.verdeClaro,
          activeTintColor: colors.black,
          labelStyle: styles.tabText,
          tabStyle: styles.tab,
        }}
      >
        <Tab.Screen name="Arañas" component={Arañas} />
        <Tab.Screen name="Escorpiones" component={Escorpiones} />
      </Tab.Navigator>
    </SafeAreaView>
  );
}

export default CategoriasMenu;

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: Platform.OS === "android" ? 25 : 0 },
  tabText: {
    fontSize: 20,
  },
  tab: {
    justifyContent: "center",
    alignItems: "center",
  },
});
