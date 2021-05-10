import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import colors from "../../config/colors";
import defaultStyles from "../../config/styles";

function FlatlistCategoria({
  image,
  peligroso,
  title = "Titulo",
  description,
  onPress,
}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.imageBox}>
          <Image style={styles.imagebox__image} source={image} />
          {peligroso && (
            <Image
              style={styles.imagebox__image__icono}
              source={require("../../assets/icons/danger.png")}
            />
          )}
          {!peligroso && (
            <Image
              style={styles.imagebox__image__icono}
              source={require("../../assets/icons/caution.png")}
            />
          )}
          {peligroso && (
            <Text style={[defaultStyles.text, styles.imagebox__messageRojo]}>
              Especie peligrosa
            </Text>
          )}
          {!peligroso && (
            <Text
              style={[defaultStyles.text, styles.imagebox__messageAmarillo]}
            >
              Especie no peligrosa
            </Text>
          )}
        </View>
        <View style={styles.textbox}>
          <Text style={[defaultStyles.text, styles.textbox__title]}>
            {title}
          </Text>
          <Text style={[defaultStyles.text, styles.textbox__description]}>
            {description}
          </Text>
        </View>
        <View style={styles.arrowbox}>
          <SimpleLineIcons name="arrow-right" size={24} color="gray" />
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default FlatlistCategoria;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    height: 125,
    borderBottomColor: colors.gray,
    borderBottomWidth: 1,
  },
  imageBox: {
    flex: 1 / 3,
    justifyContent: "center",
    alignItems: "center",
  },
  imagebox__image: { width: 100, height: 100, borderRadius: 10 },
  imagebox__image__icono: {
    width: 20,
    height: 20,
    position: "absolute",
    bottom: 24,
    right: 18,
  },
  imagebox__messageRojo: {
    color: colors.rojoOscuro,
    fontSize: 10,
    marginTop: 2,
  },
  imagebox__messageAmarillo: {
    color: colors.amarilloOscuro,
    fontSize: 9,
    marginTop: 2,
    textShadowColor: "gray",
    textShadowRadius: 0.1,
  },
  textbox: { flex: 1.7 / 3, padding: 5 },
  textbox__title: {
    fontSize: 15,
    marginBottom: 5,
    marginTop: 10,
    fontWeight: "500",
  },
  textbox__description: { fontSize: 11 },
  arrowbox: {
    flex: 0.3 / 3,
    justifyContent: "center",
    alignItems: "center",
  },
  arrowbox__image: { width: "100%", height: 125 },
});
