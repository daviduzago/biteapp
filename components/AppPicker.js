import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

import defaultStyles from "../config/styles";
import AppText from "./AppText";

function AppPicker({ icon, text, width = "100%", onPress, ...otherProps }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.container, { width }]}>
        {icon && (
          <MaterialCommunityIcons
            name={icon}
            size={20}
            color={colors.medium}
            style={styles.icon}
          />
        )}
        <AppText style={styles.text}>{text}</AppText>
        <MaterialCommunityIcons
          style={{ position: "absolute", right: 10, top: 8 }}
          name="form-dropdown"
          size={24}
          color={colors.medium}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}
export default AppPicker;

const styles = StyleSheet.create({
  container: {
    height: 40,
    backgroundColor: colors.white,
    borderRadius: 25,
    flexDirection: "row",
    padding: 10,
    paddingHorizontal: 15,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: colors.lightGray,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    color: colors.medium,
    marginLeft: 5,
  },
});
