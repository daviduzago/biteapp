import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  Linking,
  Modal,
} from "react-native";
import colors from "../config/colors";
import defaultStyles from "../config/styles";
import MenuBody from "../components/buttons/menu-body";
import MenuFooter from "../components/buttons/menu-footer";
import routes from "../navigation/routes";
import ModalEmergencia from "./modalEmergencia";
import { normalize } from "../hooks/fontSize";

export default function Menu({ navigation }) {
  const [modalEmergencias, setModalEmergencias] = useState(false);
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          style={styles.header__logo}
          source={require("../assets/icon.png")}
        ></Image>
      </View>
      <LinearGradient
        colors={[colors.white, colors.verdeClaro, colors.white]}
        style={styles.greenLine}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 0 }}
      />
      {/* Body */}
      <View style={styles.body}>
        <View style={[styles.body__row, { marginBottom: 20 }]}>
          <MenuBody
            title={"Categorias"}
            icon={require("../assets/icons/books.png")}
            color1={colors.verdeOscuro}
            color2={colors.verdeClaro}
            onpress={() => {
              navigation.navigate(routes.CATEGORIAS);
            }}
            extraStyle={{ marginRight: 20 }}
          />
          <MenuBody
            title={"Guias"}
            icon={require("../assets/icons/guide.png")}
            color1={colors.naranjaOscuro}
            color2={colors.naranjaClaro}
            onpress={() => {
              navigation.navigate(routes.GUIAS);
            }}
          />
        </View>
        <View style={styles.body__row}>
          <MenuBody
            title="Quizzes"
            icon={require("../assets/icons/quiz.png")}
            color1={colors.amarilloOscuro}
            color2={colors.amarilloClaro}
            onpress={() => {
              navigation.navigate(routes.QUIZZES);
            }}
            extraStyle={{ marginRight: 20 }}
          />
          <MenuBody
            title={"Sabias que..."}
            icon={require("../assets/icons/idea.png")}
            color1={colors.azulOscuro}
            color2={colors.azulClaro}
          />
        </View>
      </View>
      {/* Emergencias */}
      <TouchableWithoutFeedback onPress={() => setModalEmergencias(true)}>
        <View style={styles.emergency}>
          <LinearGradient
            style={styles.emergency__boton}
            colors={[colors.rojoClaro, colors.rojoOscuro]}
          >
            <Image
              style={styles.emergency__boton__icon}
              source={require("../assets/icons/emergency-call.png")}
            ></Image>
            <Text style={[defaultStyles.text, styles.emergency__boton__title]}>
              Emergencias
            </Text>
          </LinearGradient>
        </View>
      </TouchableWithoutFeedback>
      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.footer__twoButtons}>
          <MenuFooter
            title={"Acerca de"}
            icon={require("../assets/icons/team.png")}
            color1={colors.beigeClaro}
            color2={colors.beigeOscuro}
            onpress={() => {
              navigation.navigate(routes.ACERCADE);
            }}
          />
          <TouchableWithoutFeedback
            onPress={() => {
              Linking.openURL(
                "https://federaciondecafeteros.org/static/files/Politicadedatos.pdf"
              );
            }}
          >
            <LinearGradient
              style={styles.footer__twoButtons__button}
              colors={[colors.azulOscuro2, colors.azulOscuro2]}
            >
              <Text
                numberOfLines={1}
                style={[
                  defaultStyles.text,
                  { fontSize: 10, fontWeight: "500", color: colors.white },
                ]}
              >
                Politica de privacidad
              </Text>
            </LinearGradient>
          </TouchableWithoutFeedback>
          <Text
            style={[
              defaultStyles.text,
              { fontSize: 10, color: "gray", marginLeft: 5 },
            ]}
          >
            BiteApp v1.0
          </Text>
        </View>
        {/* Camara */}
        <LinearGradient
          style={styles.footer__camara}
          colors={[colors.verdeOscuro, colors.verdeClaro]}
        >
          <Image
            style={styles.footer__camara__icon}
            source={require("../assets/icons/camera.png")}
          />
        </LinearGradient>
        {/* Modal */}
        <Modal
          animationType={"slide"}
          visible={modalEmergencias}
          transparent={true}
        >
          <ModalEmergencia
            onPress={() => {
              setModalEmergencias(false);
            }}
          />
        </Modal>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flex: 0.6 / 4,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  header__logo: {
    width: 80,
    height: 80,
  },
  greenLine: {
    flex: 0.016 / 4,
    width: "90%",
  },
  body: {
    flex: 2.3 / 4,
    width: "100%",
    justifyContent: "center",
    alignContent: "center",
  },
  body__row: {
    flexDirection: "row",
    paddingHorizontal: 18,
    justifyContent: "center",
  },
  body__boton: {
    width: 140,
    height: 140,
    backgroundColor: colors.naranjaOscuro,
    borderRadius: 20,
  },
  emergency: {
    flex: 0.4 / 4,
    width: "98%",
    justifyContent: "center",
    alignItems: "center",
  },
  emergency__boton: {
    flexDirection: "row",
    width: "84%",
    height: "100%",
    backgroundColor: colors.rojoClaro,
    borderRadius: 10,
    justifyContent: "space-evenly",
    paddingHorizontal: 25,
    alignItems: "center",
  },
  emergency__boton__icon: {
    width: 50,
    height: 50,
  },
  emergency__boton__title: {
    fontSize: normalize(30),
    fontWeight: "500",
    color: colors.white,
  },
  footer: {
    flex: 1 / 4,
    width: "100%",
    flexDirection: "row",
    paddingRight: 40,
    paddingLeft: 35,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  footer__twoButtons: {
    width: 120,
    height: 90,
    justifyContent: "space-evenly",
    alignItems: "flex-start",
  },
  footer__twoButtons__button: {
    width: 115,
    height: 30,
    backgroundColor: colors.rojoClaro,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  footer__camara: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  footer__camara__icon: {
    width: 60,
    height: 60,
  },
});
