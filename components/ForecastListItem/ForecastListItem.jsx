import { Image, View } from "react-native";
import { AppText } from "../AppText/AppText";
import { styles } from "./ForecastListItem.style";

export function ForescastListItem({ image, day, date, temperature }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image}></Image>
      <AppText style={styles.day}>{day}</AppText>
      <AppText style={styles.date}>{date}</AppText>
      <AppText style={styles.temperature}>{temperature}°</AppText>
    </View>
  );
}
