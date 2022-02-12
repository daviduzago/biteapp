import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import {
  TouchableWithoutFeedback,
  Text,
  View,
  Image,
  Keyboard,
  StyleSheet,
  Modal,
  ScrollView,
  KeyboardAvoidingView,
  BackHandler,
  Alert,
  ActivityIndicator,
} from "react-native";
import colors from "../../config/colors";
import defaultStyles from "../../config/styles";
import { Picker } from "@react-native-picker/picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppPicker from "../../components/AppPicker";
import AppTextInput from "../../components/AppTextInput";
import AppText from "../../components/AppText";
import useLocation from "../../hooks/useLocation";
import * as ImagePicker from "expo-image-picker";
import { Formik } from "formik";
import { useNavigation } from "@react-navigation/core";

function AvistCategoria() {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const location = useLocation();
  const [tamaño, setTamaño] = useState("Pequeño");
  const [modalPickerTamaño, setModalPickerTamaño] = useState(false);
  const [lugar, setLugar] = useState("Casa");
  const [lugarOtro, setLugarOtro] = useState("");
  const [modalPickerLugar, setModalPickerLugar] = useState(false);
  const [modalDepart, setModalDepart] = useState(false);
  const [depart, setDepart] = useState("Huila");
  const [modalMunicipio, setModalMunicipio] = useState(false);
  const [municipio, setMunicipio] = useState("Acevedo");
  const [vereda, setVereda] = useState("");
  const [modalNumeroArac, setModalNumeroArac] = useState(false);
  const [numeroArac, setNumeroArac] = useState(1);

  //DatePicker
  const [date, setDate] = useState(new Date(Date.now()));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [modalCalendar, setModalCalendar] = useState(false);

  const onChange = (selectedDate) => {
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
  //END DatePicker

  const [imageuri, setImageuri] = useState(null);

  const [imgSource, setImgSource] = useState();

  const [isKAVEnabled, setKAVEnable] = useState(false);

  const validationSchema = Yup.object().shape({
    date: Yup.string().required().label("Fecha"),
    size: Yup.string().required().label("Tamaño"),
    color: Yup.string().required().label("Color"),
    location: Yup.string().required().label("Ubicación"),
    amount: Yup.string().required().label("Cantidad"),
    email: Yup.string().email().required().label("Correo electronico"),
    departamento: Yup.string().required().label("Departamento"),
    municipio: Yup.string().required().label("Municipio"),
    vereda: Yup.string().required().label("Vereda"),
    spider_imge_uri: Yup.string().required().label("Foto"),
  });

  const requestPhotoLibraryPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted)
      alert("Necesitamos que que active el permiso de libreria de fotos");
  };

  const requestCameraPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted)
      alert("Necesitamos que que active el permiso de libreria de fotos");
  };

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!result.cancelled) setImageuri(result.uri);
    } catch (error) {
      console.log("Error leyendo la imagen", error);
    }
  };

  const launchCamera = async () => {
    try {
      const result = await ImagePicker.launchCameraAsync();
      if (!result.cancelled) {
        setImageuri(result.uri);
        setImgSource(result.base64);
      }
    } catch (error) {
      console.log("Error leyendo la imagen", error);
    }
  };

  useEffect(() => {
    requestPhotoLibraryPermission();
    requestCameraPermission();
  }, []);

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <>
      <View style={styles.activityIndicatorContainer}>
        <ActivityIndicator
          size="large"
          color={colors.dark}
          animating={loading}
        />
      </View>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <ScrollView>
          <KeyboardAvoidingView
            enabled={isKAVEnabled}
            behavior={"position"}
            style={styles.container}
          >
            <Formik
              initialValues={{
                date: "",
                size: "",
                color: "",
                location: "",
                amount: "",
                email: "",
                departamento: "Huila",
                municipio: "Neiva",
                vereda: "",
                spider_img_uri: "",
              }}
              onSubmit={handleSubmit}
              validationSchema={validationSchema}
            >
              {({ handleChange, handleSubmit }) => (
                <>
                  <View style={styles.container}>
                    <View style={styles.header}>
                      <View style={styles.header__iconBox}>
                        <Image
                          style={styles.header__iconBox_icon}
                          source={require("../../assets/icons/binoculars.png")}
                        />
                      </View>
                      <View style={styles.header__titleBox}>
                        <Text
                          style={[
                            defaultStyles.text,
                            styles.header__titleBox_text,
                          ]}
                        >
                          ¿Donde viste este aracnido?
                        </Text>
                      </View>
                    </View>
                    <Text
                      style={[
                        defaultStyles.text,
                        { fontSize: 12, marginTop: 5 },
                      ]}
                    >
                      Por favor diligencie los siguientes datos
                    </Text>
                    <View style={styles.generalBox}>
                      <View style={styles.generalBox__1}>
                        {/* Fecha */}
                        <View style={styles.view__row__text__box}>
                          <Text
                            style={[
                              defaultStyles.text,
                              styles.generalBox__subTitle,
                            ]}
                          >
                            ¿Cuando se observo?
                          </Text>
                          {/* DatePicker */}
                          <TouchableWithoutFeedback>
                            <View style={styles.container_datePicker}>
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
                                <AppText
                                  style={[styles.box__title, { marginLeft: 5 }]}
                                >
                                  Año
                                </AppText>
                                <View style={styles.box__number__año}>
                                  <AppText>{date.getFullYear()}</AppText>
                                </View>
                              </View>
                              <View style={styles.buttonBox}>
                                <TouchableWithoutFeedback
                                  onPress={showDatepicker}
                                >
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
                                    <TouchableWithoutFeedback
                                      onPress={() => setModalCalendar(false)}
                                    >
                                      <View
                                        style={{
                                          alignItems: "flex-end",
                                          position: "absolute",
                                          top: 5,
                                          right: 5,
                                          zIndex: 1000,
                                        }}
                                      >
                                        <MaterialCommunityIcons
                                          name="close"
                                          size={30}
                                          color="gray"
                                        />
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
                        </View>
                        {/* Tamaño */}
                        <View style={styles.view__row__text__box}>
                          <Text
                            style={[
                              defaultStyles.text,
                              styles.generalBox__subTitle,
                            ]}
                          >
                            ¿Que tamaño tiene?
                          </Text>
                          <AppPicker
                            onPress={() => setModalPickerTamaño(true)}
                            width={"60%"}
                            text={tamaño}
                          ></AppPicker>
                        </View>
                        <Modal
                          animationType={"slide"}
                          transparent={true}
                          visible={modalPickerTamaño}
                        >
                          <View style={styles.modal}>
                            <TouchableWithoutFeedback
                              onPress={() => setModalPickerTamaño(false)}
                            >
                              <View style={styles.salirModal}>
                                <MaterialCommunityIcons
                                  name="close"
                                  size={30}
                                  color="gray"
                                />
                              </View>
                            </TouchableWithoutFeedback>
                            <Picker
                              selectedValue={tamaño}
                              onValueChange={(itemValue) =>
                                setTamaño(itemValue)
                              }
                            >
                              <Picker.Item label="Pequeño" value="Pequeño" />
                              <Picker.Item label="Juvenil" value="Juvenil" />
                              <Picker.Item label="Mediano" value="Mediano" />
                              <Picker.Item label="Adulto" value="Adulto" />
                            </Picker>
                          </View>
                        </Modal>
                        <Text
                          style={[
                            defaultStyles.text,
                            styles.generalBox__subTitle,
                          ]}
                        >
                          ¿Que coloración observaste?
                        </Text>
                        <AppTextInput
                          placeholder="Ej: Azul, Cafe y negro, Rojo, etc."
                          width={"90%"}
                          icon={"invert-colors"}
                        />
                        {/*Donde estaba el aracnido */}
                        <View style={styles.view__row__text__box}>
                          <Text
                            style={[
                              defaultStyles.text,
                              styles.generalBox__subTitle,
                            ]}
                          >
                            ¿Donde estaba el aracnido?
                          </Text>
                          <AppPicker
                            onPress={() => setModalPickerLugar(true)}
                            width={"50%"}
                            text={lugar}
                          ></AppPicker>
                        </View>
                        <Modal
                          animationType={"slide"}
                          transparent={true}
                          visible={modalPickerLugar}
                        >
                          <View style={styles.modal}>
                            <TouchableWithoutFeedback
                              onPress={() => setModalPickerLugar(false)}
                            >
                              <View style={styles.salirModal}>
                                <MaterialCommunityIcons
                                  name="close"
                                  size={30}
                                  color="gray"
                                />
                              </View>
                            </TouchableWithoutFeedback>

                            <Picker
                              selectedValue={lugar}
                              onValueChange={(itemValue, itemIndex) =>
                                setLugar(itemValue)
                              }
                            >
                              <Picker.Item label="Casa" value="Casa" />
                              <Picker.Item label="Arboles" value="Arboles" />
                              <Picker.Item label="Campo" value="Campo" />
                              <Picker.Item label="Suelo" value="Suelo" />
                              <Picker.Item label="Cueva" value="Cueva" />
                              <Picker.Item label="Otro" value="Otro" />
                            </Picker>
                          </View>
                        </Modal>
                        {lugar == "Otro" && (
                          <View>
                            <Text
                              style={[
                                defaultStyles.text,
                                styles.generalBox__subTitle,
                              ]}
                            >
                              Describa el lugar donde vio el aracnido:
                            </Text>
                            <AppTextInput
                              onChangeText={setLugarOtro}
                              width={"90%"}
                            />
                          </View>
                        )}
                        {/*FINAL  Donde estaba el aracnido */}
                        {/* ------------------------------------- */}
                        {/* Departamento */}

                        {/* Cantidad */}
                        <View style={styles.view__row__text__box}>
                          <Text
                            style={[
                              defaultStyles.text,
                              styles.generalBox__subTitle,
                            ]}
                          >
                            Numero de individuos avistados:
                          </Text>
                          <AppPicker
                            onPress={() => setModalNumeroArac(true)}
                            width={"30%"}
                            text={numeroArac}
                          ></AppPicker>
                        </View>
                        <Modal
                          animationType={"slide"}
                          transparent={true}
                          visible={modalNumeroArac}
                        >
                          <View style={styles.modal}>
                            <TouchableWithoutFeedback
                              onPress={() => setModalNumeroArac(false)}
                            >
                              <View style={styles.salirModal}>
                                <MaterialCommunityIcons
                                  name="close"
                                  size={30}
                                  color="gray"
                                />
                              </View>
                            </TouchableWithoutFeedback>
                            <Picker
                              selectedValue={numeroArac}
                              onValueChange={(itemValue, itemIndex) =>
                                setNumeroArac(itemValue)
                              }
                            >
                              <Picker.Item label="1" value={1} />
                              <Picker.Item label="2" value={2} />
                              <Picker.Item label="3" value={3} />
                              <Picker.Item label="4" value={4} />
                              <Picker.Item label="5" value={5} />
                              <Picker.Item label="6" value={6} />
                              <Picker.Item label="7" value={7} />
                              <Picker.Item label="8" value={8} />
                              <Picker.Item label="9" value={9} />
                              <Picker.Item label="10" value={10} />
                            </Picker>
                          </View>
                        </Modal>
                        <Text
                          style={[
                            defaultStyles.text,
                            styles.generalBox__subTitle,
                          ]}
                        >
                          Correo electronico:
                        </Text>
                        <AppTextInput width={"90%"} icon={"email"} />
                      </View>
                    </View>
                    <View
                      style={{
                        width: "100%",
                        alignItems: "flex-start",
                      }}
                    >
                      <AppText
                        style={[
                          styles.generalBox__subTitle,
                          {
                            fontSize: 15,
                            marginVertical: 10,
                            color: colors.medium,
                            marginLeft: 15,
                          },
                        ]}
                      >
                        Ubicación:
                      </AppText>
                    </View>
                    <View style={styles.generalBox__1}>
                      <View style={styles.view__row__text__box}>
                        <Text
                          style={[
                            defaultStyles.text,
                            styles.generalBox__subTitle,
                          ]}
                        >
                          Departamento:
                        </Text>
                        <AppPicker
                          onPress={() => setModalDepart(true)}
                          width={"50%"}
                          text={depart}
                        ></AppPicker>
                      </View>
                      <Modal
                        animationType={"slide"}
                        transparent={true}
                        visible={modalDepart}
                      >
                        <View style={styles.modal}>
                          <TouchableWithoutFeedback
                            onPress={() => setModalDepart(false)}
                          >
                            <View style={styles.salirModal}>
                              <MaterialCommunityIcons
                                name="close"
                                size={30}
                                color="gray"
                              />
                            </View>
                          </TouchableWithoutFeedback>

                          <Picker
                            selectedValue={depart}
                            onValueChange={(itemValue, itemIndex) =>
                              setDepart(itemValue)
                            }
                          >
                            <Picker.Item label="Huila" value="Huila" />
                          </Picker>
                        </View>
                      </Modal>
                      {/* Municipio */}
                      <View style={styles.view__row__text__box}>
                        <Text
                          style={[
                            defaultStyles.text,
                            styles.generalBox__subTitle,
                          ]}
                        >
                          Municipio:
                        </Text>
                        <AppPicker
                          onPress={() => setModalMunicipio(true)}
                          width={"50%"}
                          text={municipio}
                        ></AppPicker>
                      </View>
                      <Modal
                        animationType={"slide"}
                        transparent={true}
                        visible={modalMunicipio}
                      >
                        <View style={styles.modal}>
                          <TouchableWithoutFeedback
                            onPress={() => setModalMunicipio(false)}
                          >
                            <View style={styles.salirModal}>
                              <MaterialCommunityIcons
                                name="close"
                                size={30}
                                color="gray"
                              />
                            </View>
                          </TouchableWithoutFeedback>
                          <Picker
                            selectedValue={municipio}
                            onValueChange={(itemValue, itemIndex) =>
                              setMunicipio(itemValue)
                            }
                          >
                            <Picker.Item label="Acevedo" value="Acevedo" />
                            <Picker.Item label="Aipe" value="Aipe" />
                            <Picker.Item label="Algeciras" value="Algeciras" />
                            <Picker.Item label="Altamira" value="Altamira" />
                            <Picker.Item label="Baraya" value="Baraya" />
                            <Picker.Item
                              label="Campoalegre"
                              value="Campoalegre"
                            />
                            <Picker.Item label="Colombia" value="Colombia" />
                            <Picker.Item label="Elías" value="Elías" />
                            <Picker.Item label="El Agrado" value="El Agrado" />
                            <Picker.Item label="Garzón" value="Garzón" />
                            <Picker.Item label="Gigante" value="Gigante" />
                            <Picker.Item label="Guadalupe" value="Guadalupe" />
                            <Picker.Item label="Hobo" value="Hobo" />
                            <Picker.Item label="Íquira" value="Íquira" />
                            <Picker.Item label="Isnos" value="Isnos" />
                            <Picker.Item
                              label="La Argentina"
                              value="La Argentina"
                            />
                            <Picker.Item label="La Plata" value="La Plata" />
                            <Picker.Item label="Nátaga" value="Nátaga" />
                            <Picker.Item label="Neiva" value="Neiva" />
                            <Picker.Item label="Oporapa" value="Oporapa" />
                            <Picker.Item label="Paicol" value="Paicol" />
                            <Picker.Item label="Palermo" value="Palermo" />
                            <Picker.Item label="Palestina" value="Palestina" />
                            <Picker.Item label="Pital" value="Pital" />
                            <Picker.Item label="Pitalito" value="Pitalito" />
                            <Picker.Item label="Rivera" value="Rivera" />
                            <Picker.Item
                              label="Saladoblanco"
                              value="Saladoblanco"
                            />
                            <Picker.Item
                              label="Santa María"
                              value="Santa María"
                            />
                            <Picker.Item
                              label="San Agustin"
                              value="San Agustin"
                            />
                            <Picker.Item label="Suaza" value="Suaza" />
                            <Picker.Item label="Tarqui" value="Tarqui" />
                            <Picker.Item label="Tello" value="Tello" />
                            <Picker.Item label="Teruel" value="Teruel" />
                            <Picker.Item label="Tesalia" value="Tesalia" />
                            <Picker.Item label="Timaná" value="Timaná" />
                            <Picker.Item
                              label="Villavieja"
                              value="Villavieja"
                            />
                            <Picker.Item label="Yaguará" value="Yaguará" />
                          </Picker>
                        </View>
                      </Modal>
                      {/* Vereda */}
                      <View style={styles.view__row__text__box}>
                        <Text
                          style={[
                            defaultStyles.text,
                            styles.generalBox__subTitle,
                          ]}
                        >
                          Vereda:
                        </Text>
                        <AppTextInput
                          placeholder={"Ej: Aipecito"}
                          onChangeText={setVereda}
                          width={"70%"}
                          onFocus={() => setKAVEnable(true)}
                        />
                      </View>
                    </View>
                    <View style={styles.imagePickerBox}>
                      <Image
                        source={require("../../assets/icons/camera.png")}
                        style={styles.imagePickerBox__icon}
                      />
                      <TouchableWithoutFeedback onPress={selectImage}>
                        <View style={styles.imagePickerBox__container}>
                          {imageuri == null && (
                            <AppText style={{ fontWeight: "500" }}>
                              Escoger foto
                            </AppText>
                          )}
                          <Image
                            style={styles.imagePickerBox__container__image}
                            source={{ uri: imageuri }}
                          />
                        </View>
                      </TouchableWithoutFeedback>
                      <TouchableWithoutFeedback onPress={launchCamera}>
                        <View style={styles.imagePickerBox__button}>
                          <AppText
                            style={{
                              textAlign: "center",
                              fontSize: 17,
                              fontWeight: "500",
                            }}
                          >
                            Volver a tomar {"\n"} la foto
                          </AppText>
                        </View>
                      </TouchableWithoutFeedback>
                    </View>
                    <TouchableWithoutFeedback onPress={handleSubmit}>
                      <View style={styles.submitButton}>
                        <Text
                          style={{
                            fontSize: 25,
                            color: "white",
                            fontWeight: "700",
                          }}
                        >
                          Enviar
                        </Text>
                      </View>
                    </TouchableWithoutFeedback>
                  </View>
                </>
              )}
            </Formik>
          </KeyboardAvoidingView>
        </ScrollView>
      </TouchableWithoutFeedback>
    </>
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
  activityIndicatorContainer: {
    flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: colors.lightGray,
    zIndex: 1000,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    backgroundColor: "transparent",
  },
  calendar: {
    width: "100%",
    marginLeft: 10,
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
    marginRight: 5,
  },
  generalBox__1: {
    width: "100%",
    borderRadius: 10,
    backgroundColor: colors.verdeSuperClaro,
    padding: 10,
  },
  modal: {
    flex: 1,
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 170,
    backgroundColor: colors.light,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  salirModal: {
    alignItems: "flex-end",
    position: "absolute",
    top: 5,
    right: 5,
    zIndex: 1000,
  },
  view__row__text__box: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  imagePickerBox: {
    width: "100%",
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  imagePickerBox__icon: { height: 60, width: 60, marginLeft: 10 },
  imagePickerBox__container: {
    height: 100,
    width: 100,
    borderRadius: 10,
    backgroundColor: colors.light,
    borderWidth: 2,
    borderColor: colors.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  imagePickerBox__container__image: {
    height: 100,
    width: 100,
    borderRadius: 10,
    overflow: "hidden",
    position: "absolute",
  },
  imagePickerBox__button: {
    height: 50,
    width: 150,
    marginRight: 10,
    borderRadius: 8,
    backgroundColor: colors.light,
    justifyContent: "center",
    alignItems: "center",
  },
  submitButton: {
    width: 200,
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.verdeClaro,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  //Datepicker Style
  box__title: { fontSize: 10, fontWeight: "500" },
  container_datePicker: {
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
