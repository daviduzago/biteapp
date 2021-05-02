import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import FlatlistCategoria from "../../components/flatlist/flatlist-categoria";
import colors from "../../config/colors";

function CategoriasAraña() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <FlatlistCategoria
          peligroso={false}
          title={"Araña"}
          image={require("../../assets/categorias/arañas/golden-spider.jpg")}
        />
        <FlatlistCategoria
          peligroso={true}
          title={"Araña"}
          image={require("../../assets/categorias/arañas/golden-spider.jpg")}
        />
        <FlatlistCategoria
          peligroso={false}
          title={"Araña"}
          image={require("../../assets/categorias/arañas/golden-spider.jpg")}
        />
        <FlatlistCategoria
          peligroso={true}
          title={"Araña"}
          image={require("../../assets/categorias/arañas/golden-spider.jpg")}
        />
        <FlatlistCategoria
          peligroso={false}
          title={"Araña"}
          image={require("../../assets/categorias/arañas/golden-spider.jpg")}
        />
        <FlatlistCategoria
          peligroso={true}
          title={"Araña"}
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
