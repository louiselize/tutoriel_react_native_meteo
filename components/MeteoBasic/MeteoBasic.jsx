import { Image, View } from "react-native";
import { AppText } from "../AppText/AppText";
import { styles } from "./MeteoBasic.style";

export function MeteoBasic() {
  return (
    <>
      <View style={styles.clock}>
        <AppText>Clock</AppText>
      </View>
      <AppText>City</AppText>
      <View style={styles.weather_label}>
        <AppText>Label</AppText>
      </View>
      <View style={styles.temperature_box}>
        <AppText style={styles.temperature}>2°</AppText>
        <Image style={styles.image} />
      </View>
    </>
  );
}
