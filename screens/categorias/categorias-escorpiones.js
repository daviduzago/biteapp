import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import FlatlistCategoria from "../../components/flatlist/flatlist-categoria";
import colors from "../../config/colors";

function CategoriasEscorpiones() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <FlatlistCategoria
          peligroso={true}
          image={require("../../assets/categorias/escorpiones/black.jpg")}
          title="Escorpion"
        />
        <FlatlistCategoria
          peligroso={false}
          image={require("../../assets/categorias/escorpiones/black.jpg")}
          title="Escorpion"
        />
        <FlatlistCategoria
          peligroso={true}
          image={require("../../assets/categorias/escorpiones/black.jpg")}
          title="Escorpion"
        />
        <FlatlistCategoria
          peligroso={false}
          image={require("../../assets/categorias/escorpiones/black.jpg")}
          title="Escorpion"
        />
        <FlatlistCategoria
          peligroso={true}
          image={require("../../assets/categorias/escorpiones/black.jpg")}
          title="Escorpion"
        />
        <FlatlistCategoria
          peligroso={false}
          image={require("../../assets/categorias/escorpiones/black.jpg")}
          title="Escorpion"
        />
      </View>
    </ScrollView>
  );
}

export default CategoriasEscorpiones;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
