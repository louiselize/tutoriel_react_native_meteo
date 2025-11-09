import { useRoute } from "@react-navigation/native";
import { AppText } from "../../components/AppText/AppText";
import { Container } from "../../components/Container/Container";

export function Forecast({}) {
  const { params } = useRoute();
  return (
    <Container>
      <AppText>Forecast at {params.city}</AppText>
    </Container>
  );
}
