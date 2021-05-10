import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import colors from "../../config/colors";
import FlatlistCategoria from "../../components/categorias/flatlist-categoria";
import routes from "../../navigation/routes";

function CategoriasAraña({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <FlatlistCategoria
          peligroso={false}
          title={"Super Araña"}
          image={require("../../assets/categorias/arañas/golden-spider.jpg")}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua."
          }
          onPress={() => {
            navigation.navigate(routes.CATEGORIA_ARACNIDO);
          }}
        />
        <FlatlistCategoria
          peligroso={true}
          title={"Araña"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua."
          }
          image={require("../../assets/categorias/arañas/golden-spider.jpg")}
        />
        <FlatlistCategoria
          peligroso={false}
          title={"Araña"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua."
          }
          image={require("../../assets/categorias/arañas/golden-spider.jpg")}
        />
        <FlatlistCategoria
          peligroso={true}
          title={"Araña"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua."
          }
          image={require("../../assets/categorias/arañas/golden-spider.jpg")}
        />
        <FlatlistCategoria
          peligroso={false}
          title={"Araña"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua."
          }
          image={require("../../assets/categorias/arañas/golden-spider.jpg")}
        />
        <FlatlistCategoria
          peligroso={true}
          title={"Araña"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua."
          }
          image={require("../../assets/categorias/arañas/golden-spider.jpg")}
        />
      </View>
    </ScrollView>
  );
}

export default CategoriasAraña;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
