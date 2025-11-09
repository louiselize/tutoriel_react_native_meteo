import { useNavigation, useRoute } from "@react-navigation/native";
import { TouchableOpacity, View } from "react-native";
import { AppText } from "../../components/AppText/AppText";
import { Container } from "../../components/Container/Container";
import { ForescastListItem } from "../../components/ForecastListItem/ForecastListItem";
import { dateToDDMM, DAYS } from "../../services/date-service";
import { getWeatherInterpretation } from "../../services/meteo-service";
import { styles } from "./Forecast.style";

export function Forecast({}) {
  const { params } = useRoute();
  const navigation = useNavigation();

  const backButton = (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={styles.go_back_button}>
      <AppText style={{ fontSize: 18 }}>←</AppText>
    </TouchableOpacity>
  );

  const header = (
    <View style={styles.header}>
      {backButton}
      <View style={styles.header_text}>
        <AppText style={{ fontSize: 25 }}>{params.city}</AppText>
        <AppText style={styles.subtitle}>Prévision sur 7 jours</AppText>
      </View>
    </View>
  );

  const forecastList = (
    <View style={styles.forecast_list}>
      {params.time.map((time, index) => {
        const code = params.weathercode[index];
        const image = getWeatherInterpretation(code).image;
        const date = new Date(time);
        const day = DAYS[date.getDay()];
        const temperature = params.temperature_2m_max[index].toFixed(0);
        return (
          <ForescastListItem
            key={time}
            image={image}
            day={day}
            date={dateToDDMM(date)}
            temperature={temperature}
          />
        );
      })}
    </View>
  );
  return (
    <Container>
      {header}
      {forecastList}
    </Container>
  );
}
