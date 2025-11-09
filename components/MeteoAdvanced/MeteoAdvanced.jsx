import { View } from "react-native";
import {
  StyledContainer,
  StyledLabel,
  StyledValue,
  styles,
} from "./MeteoAdvanced.style";

export function MeteoAdvanced({ dusk, dawn, wind }) {
  return (
    <View style={styles.container}>
      <StyledContainer>
        <StyledValue>{dusk}</StyledValue>
        <StyledLabel>Aube</StyledLabel>
      </StyledContainer>
      <StyledContainer>
        <StyledValue>{dawn}</StyledValue>
        <StyledLabel>Crepuscule</StyledLabel>
      </StyledContainer>
      <StyledContainer>
        <StyledValue>{wind} km/h</StyledValue>
        <StyledLabel>Vent</StyledLabel>
      </StyledContainer>
    </View>
  );
}
