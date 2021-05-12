import React, { useState } from "react";
import {
  TouchableWithoutFeedback,
  Text,
  View,
  Image,
  Keyboard,
  StyleSheet,
  Button,
} from "react-native";
import AppTextInput from "../../components/textInput";
import colors from "../../config/colors";
import defaultStyles from "../../config/styles";
import DateTimePicker from "@react-native-community/datetimepicker";

function AvistCategoria() {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };
  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.header__iconBox}>
            <Image
              style={styles.header__iconBox_icon}
              source={require("../../assets/icons/binoculars.png")}
            />
          </View>
          <View style={styles.header__titleBox}>
            <Text style={[defaultStyles.text, styles.header__titleBox_text]}>
              ¿Donde viste este aracnido?
            </Text>
          </View>
        </View>
        <Text style={[defaultStyles.text, { fontSize: 12, marginTop: 5 }]}>
          Por favor diligencie los siguientes datos
        </Text>
        <View style={styles.generalBox}>
          <Text style={[defaultStyles.text, styles.generalBox__title]}>
            Datos Generales
          </Text>
          <View style={styles.generalBox__1}>
            <Text style={[defaultStyles.text, styles.generalBox__subTitle]}>
              Fecha que vio el aracnido:
            </Text>
            <AppTextInput width={"90%"} icon={"calendar"} />
            <Text style={[defaultStyles.text, styles.generalBox__subTitle]}>
              Nombre Completo:
            </Text>
            <AppTextInput width={"90%"} icon={"account"} />
            <Text style={[defaultStyles.text, styles.generalBox__subTitle]}>
              Nombre:
            </Text>
            <AppTextInput width={"90%"} icon={"alphabetical"} />
          </View>
        </View>
        <Button title={"Calendario"} onPress={showDatepicker}></Button>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="date"
            onChange={onChange}
          />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

export default AvistCategoria;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 5,
  },
  header: {
    width: "75%",
    height: 80,
    flexDirection: "row",
  },
  header__iconBox: {
    flex: 1 / 3,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  header__iconBox_icon: { width: 80, height: 80 },
  header__titleBox: {
    flex: 2 / 3,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  header__titleBox_text: {
    fontSize: 20,
    textAlign: "center",
    color: colors.verdeOscuro,
    fontWeight: "bold",
  },
  generalBox: {
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginTop: 5,
  },
  generalBox__title: {
    fontSize: 15,
    color: colors.verdeOscuro,
    fontWeight: "500",
    marginLeft: 5,
  },
  generalBox__subTitle: {
    fontSize: 13,
    color: colors.black,
    fontWeight: "500",
    marginLeft: 10,
  },
  generalBox__1: {
    width: "100%",
    borderRadius: 10,
    backgroundColor: colors.verdeSuperClaro,
    padding: 5,
  },
  generalBox__2: {},
  generalBox__3: {},
});
