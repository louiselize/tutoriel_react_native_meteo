import { useNavigation, useRoute } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
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
  return (
    <Container>
      {backButton}
      <AppText>Forecast at {params.city}</AppText>
    </Container>
  );
}
