import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Platform,
  TouchableWithoutFeedback,
  Modal,
} from "react-native";
import AppText from "../components/AppText";
import colors from "../config/colors";
import DateTimePicker from "@react-native-community/datetimepicker";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function DatePicker() {
  const [date, setDate] = useState(new Date(Date.now()));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [modalCalendar, setModalCalendar] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
    setModalCalendar(true);
  };

  const showDatepicker = () => {
    showMode("date");
  };
  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <View style={styles.dia}>
          <AppText style={styles.box__title}>Día</AppText>
          <View style={styles.box__number}>
            <AppText>{date.getDate()}</AppText>
          </View>
        </View>
        <View style={styles.mes}>
          <AppText style={styles.box__title}>Mes</AppText>
          <View style={styles.box__number}>
            <AppText>{date.getMonth() + 1}</AppText>
          </View>
        </View>
        <View style={styles.año}>
          <AppText style={[styles.box__title, { marginLeft: 5 }]}>Año</AppText>
          <View style={styles.box__number__año}>
            <AppText>{date.getFullYear()}</AppText>
          </View>
        </View>
        <View style={styles.buttonBox}>
          <TouchableWithoutFeedback onPress={showDatepicker}>
            <MaterialCommunityIcons
              name="calendar-month"
              size={30}
              color={"gray"}
            />
          </TouchableWithoutFeedback>
        </View>
        {Platform.OS == "android" && show && (
          <View style={styles.calendar__android}>
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              display={"calendar"}
              onChange={onChange}
            />
          </View>
        )}
        <Modal
          animationType={"slide"}
          transparent={true}
          visible={modalCalendar}
        >
          {Platform.OS == "ios" && show && (
            <View style={styles.calendar__ios}>
              <TouchableWithoutFeedback onPress={() => setModalCalendar(false)}>
                <View
                  style={{
                    alignItems: "flex-end",
                    position: "absolute",
                    top: 5,
                    right: 5,
                    zIndex: 1000,
                  }}
                >
                  <MaterialCommunityIcons name="close" size={30} color="gray" />
                </View>
              </TouchableWithoutFeedback>

              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                display={"spinner"}
                onChange={onChange}
                textColor={"black"}
              />
            </View>
          )}
        </Modal>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default DatePicker;

const styles = StyleSheet.create({
  box__title: { fontSize: 10, fontWeight: "500" },
  container: {
    width: 160,
    height: 40,
    flexDirection: "row",
    borderRadius: 8,
    backgroundColor: colors.lightGray,
    paddingLeft: 5,
    borderWidth: 1,
    borderColor: colors.lightGray,
  },
  box__number: {
    width: 23,
    height: 23,
    borderRadius: 3,
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
  },
  box__number__año: {
    width: 40,
    height: 23,
    borderRadius: 3,
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
  },
  calendar__android: {
    width: "100%",
    marginLeft: 10,
  },
  calendar__ios: {
    flex: 1,
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 200,
    backgroundColor: colors.light,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  dia: {
    flex: 0.8 / 4,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  mes: {
    flex: 0.8 / 4,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  año: {
    flex: 1.2 / 4,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingLeft: 5,
  },
  buttonBox: {
    flex: 1.2 / 4,
    justifyContent: "center",
    alignItems: "center",
  },
});
