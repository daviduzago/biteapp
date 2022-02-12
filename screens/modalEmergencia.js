import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import { normalize } from "../hooks/fontSize";
import { PanGestureHandler } from "react-native-gesture-handler";

function ModalEmergencia({ onPress }) {
  return (
    <View style={styles.modal}>
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.salirModal}>
          <MaterialCommunityIcons name="close" size={30} color="gray" />
        </View>
      </TouchableWithoutFeedback>
      <View style={styles.modal_header}>
        <Image
          source={require("../assets/icons/emergency-call2.png")}
          style={{ width: 50, height: 50 }}
        />
        <Text style={[styles.modal_headerText]}>
          Lineas de {"\n"}emergencia
        </Text>
      </View>
      <LinearGradient
        colors={[colors.rojoClaro2, colors.rojoClaro, colors.rojoClaro2]}
        style={styles.separator}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 0 }}
      />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 5,
        }}
      >
        <Text
          style={{
            fontSize: normalize(20),
            fontWeight: "bold",
            color: colors.medium,
          }}
        >
          Linea nacional:
        </Text>
        <Text
          style={{
            fontSize: normalize(20),
            color: colors.medium,
            marginLeft: 10,
          }}
        >
          Linea 123
        </Text>
      </View>
      <View style={styles.modal_body}>
        <View
          style={[styles.modal_body_column1, { backgroundColor: "yellow" }]}
        >
          <Text>Neiva</Text>
        </View>
        <View
          style={[styles.modal_body_column2, { backgroundColor: "green" }]}
        ></View>
      </View>
    </View>
  );
}

export default ModalEmergencia;

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "80%",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: colors.rojoClaro2,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  modal_header: {
    flex: 1.5 / 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  modal_headerText: {
    color: colors.rojoClaro,
    fontSize: normalize(30),
    fontWeight: "bold",
    textAlign: "center",
    marginLeft: 10,
  },
  modal_body: {
    flexDirection: "row",
    width: "100%",
  },
  modal_body_column1: {
    width: "30%",
    padding: 10,
  },
  modal_body_column2: {
    width: "70%",
    padding: 10,
  },
  salirModal: {
    alignItems: "flex-end",
    position: "absolute",
    top: 5,
    right: 10,
    zIndex: 1000,
  },
  separator: {
    flex: 0.016 / 4,
    width: "90%",
  },
});
