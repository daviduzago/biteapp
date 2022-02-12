import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import DATA from "../../assets/json/aracnidos";
import { useNavigation } from "@react-navigation/native";
import ImageCarousel from "../../components/categorias/image-carousel";
import NextButton from "../../components/buttons/arac-indiv-siguiente";
import BackButton from "../../components/buttons/arac-indiv-anterior";
import AvistButton from "../../components/buttons/arac-indiv-avist";
import PicadaButton from "../../components/buttons/arac-indiv-picada";
import colors from "../../config/colors";
import defaultStyles from "../../config/styles";
import routes from "../../navigation/routes";

function AracnidoIndividual() {
  const navigation = useNavigation();
  const [index, setIndex] = useState(0);
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{ width: "100%", height: 200, marginBottom: 10 }}>
          <ImageCarousel data={DATA[index].images} />
        </View>
        <Text style={[defaultStyles.text, styles.title]}>
          {DATA[index].title}
        </Text>
        <View style={styles.factBox}>
          <View style={styles.factBox__textBox}>
            <Text style={[defaultStyles.text, styles.factBox__textBox_title]}>
              Info:
            </Text>
            <Text style={[defaultStyles.text, styles.factBox__textBox_message]}>
              {DATA[index].fact1}
            </Text>
          </View>
          <View style={styles.factBox__textBox}>
            <Text style={[defaultStyles.text, styles.factBox__textBox_title]}>
              Info:
            </Text>
            <Text style={[defaultStyles.text, styles.factBox__textBox_message]}>
              {DATA[index].fact2}
            </Text>
          </View>
          <View style={styles.factBox__textBox}>
            <Text style={[defaultStyles.text, styles.factBox__textBox_title]}>
              Info:
            </Text>
            <Text style={[defaultStyles.text, styles.factBox__textBox_message]}>
              {DATA[index].fact3}
            </Text>
          </View>
        </View>
        <View style={styles.info}>
          <Text style={[defaultStyles.text, styles.info__text]}>
            {DATA[index].description}
          </Text>
        </View>
        <View style={styles.navigationBox}>
          <View style={styles.backBox}>{index == 0 && <BackButton />}</View>
          <View style={styles.nextBox}>
            <NextButton />
          </View>
        </View>
        <View style={styles.reportBox}>
          <PicadaButton />
          <AvistButton
            onPress={() => navigation.navigate(routes.AVIST_CATEGORIA)}
          />
        </View>
      </View>
    </ScrollView>
  );
}

export default AracnidoIndividual;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 10,
  },
  title: { marginTop: 10, fontSize: 25, fontWeight: "500" },
  factBox: {
    width: "95 %",
    justifyContent: "flex-start",
    backgroundColor: colors.white,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 5,
  },
  factBox__textBox: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    marginVertical: 3,
  },
  factBox__textBox_title: { fontSize: 15, fontWeight: "bold", marginRight: 5 },
  factBox__textBox_message: { fontSize: 15, color: "gray" },
  info: {
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  info__text: { fontSize: 13, textAlign: "justify" },
  navigationBox: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  backBox: {
    flex: 1 / 2,
    width: "100%",
    paddingLeft: 15,
  },
  nextBox: {
    flex: 1 / 2,
    width: "100%",
    alignItems: "flex-end",
    paddingRight: 15,
  },
  reportBox: {
    width: "100%",
    height: 50,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
