import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import DATA from "../../assets/json/aracnidos";
import ImageCarousel from "../../components/categorias/image-carousel";
import NextButton from "../../components/buttons/arac-indiv-siguiente";
import BackButton from "../../components/buttons/arac-indiv-anterior";
import AvistButton from "../../components/buttons/arac-indiv-avist";
import PicadaButton from "../../components/buttons/arac-indiv-picada";
import colors from "../../config/colors";
import defaultStyles from "../../config/styles";

function AracnidoIndividual() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{ width: "100%", height: 200, marginBottom: 10 }}>
          <ImageCarousel data={DATA[0].images} />
        </View>
        <Text style={[defaultStyles.text, styles.title]}>{DATA[0].title}</Text>
        <View style={styles.factBox}>
          <View style={styles.factBox__textBox}>
            <Text style={[defaultStyles.text, styles.factBox__textBox_title]}>
              Info:
            </Text>
            <Text style={[defaultStyles.text, styles.factBox__textBox_message]}>
              Sed ut perspiciatis unde omnis iste.
            </Text>
          </View>
          <View style={styles.factBox__textBox}>
            <Text style={[defaultStyles.text, styles.factBox__textBox_title]}>
              Info:
            </Text>
            <Text style={[defaultStyles.text, styles.factBox__textBox_message]}>
              Sed ut perspiciatis unde omnis iste.
            </Text>
          </View>
          <View style={styles.factBox__textBox}>
            <Text style={[defaultStyles.text, styles.factBox__textBox_title]}>
              Info:
            </Text>
            <Text style={[defaultStyles.text, styles.factBox__textBox_message]}>
              Sed ut perspiciatis unde omnis iste.
            </Text>
          </View>
        </View>
        <View style={styles.info}>
          <Text style={[defaultStyles.text, styles.info__text]}>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit quo minus id quod maxime placeat
            facere possimus, omnis voluptas assumenda est, omnis dolor
            repellendus. Temporibus autem quibusdam et aut officiis debitis aut
            rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint
            et molestiae non recusandae. Nam libero tempore, cum soluta nobis
            est eligendi optio cumque nihil impedit quo minus id quod maxime
            placeat facere possimus, omnis voluptas assumenda est, omnis dolor
            repellendus. Temporibus autem quibusdam et aut officiis debitis aut
            rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint
            et molestiae non recusandae.
          </Text>
        </View>
        <View style={styles.navigationBox}>
          <View style={styles.backBox}>
            <BackButton />
          </View>
          <View style={styles.nextBox}>
            <NextButton />
          </View>
        </View>
        <View style={styles.reportBox}>
          <PicadaButton />
          <AvistButton />
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
