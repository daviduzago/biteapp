import React, { useState } from "react";
import { View, StyleSheet, Dimensions, Image } from "react-native";
import DATA from "../../assets/json/aracnidos";
import Carousel from "react-native-snap-carousel";
const SLIDER_WIDTH = Dimensions.get("window").width;

function ImageCarousel({ data }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const renderItem = ({ item }) => (
    <View style={styles.container}>
      <Image
        style={{
          borderRadius: 10,
          overflow: "hidden",
          resizeMode: "cover",
          width: 280,
          height: 200,
        }}
        source={item.uri}
      />
    </View>
  );

  return (
    <Carousel
      layout={"default"}
      ref={(ref) => (carousel = ref)}
      data={data}
      sliderWidth={SLIDER_WIDTH}
      itemWidth={280}
      renderItem={(item) => renderItem(item)}
      onSnapToItem={(index) => setActiveIndex(index)}
    />
  );
}
export default ImageCarousel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 100,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
