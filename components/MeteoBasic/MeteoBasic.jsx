import { Image, View } from "react-native";
import { AppText } from "../AppText/AppText";
import { styles } from "./MeteoBasic.style";

export function MeteoBasic({ temperature, city, interpretation }) {
  return (
    <>
      <View style={styles.clock}>
        <AppText>Clock</AppText>
      </View>
      <AppText>{city}</AppText>
      <AppText style={styles.weather_label}>{interpretation.label}</AppText>
      <View style={styles.temperature_box}>
        <AppText style={styles.temperature}>{temperature}°</AppText>
        <Image style={styles.image} source={interpretation.image} />
      </View>
    </>
  );
}
