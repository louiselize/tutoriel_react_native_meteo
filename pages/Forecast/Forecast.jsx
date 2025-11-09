import { useNavigation, useRoute } from "@react-navigation/native";
import { TouchableOpacity, View } from "react-native";
import { AppText } from "../../components/AppText/AppText";
import { Container } from "../../components/Container/Container";
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
  return <Container>{header}</Container>;
}
