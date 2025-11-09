import { Image, TouchableOpacity, View } from "react-native";
import { AppText } from "../AppText/AppText";
import { Clock } from "../Clock/Clock";
import { styles } from "./MeteoBasic.style";

export function MeteoBasic({
  temperature,
  city,
  interpretation,
  onTemperaturePress,
}) {
  return (
    <>
      <View style={styles.clock}>
        <Clock />
      </View>

      <AppText>{city}</AppText>

      <AppText style={styles.weather_label}>{interpretation.label}</AppText>

      <View style={styles.temperature_box}>
        <TouchableOpacity onPress={onTemperaturePress}>
          <AppText style={styles.temperature}>{temperature}°</AppText>
        </TouchableOpacity>
        <Image style={styles.image} source={interpretation.image} />
      </View>
    </>
  );
}
