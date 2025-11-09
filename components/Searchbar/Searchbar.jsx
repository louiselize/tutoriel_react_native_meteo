import { TextInput } from "react-native";
import { styles } from "./Searchbar.style";
export function Searchbar({ onSubmit }) {
  return (
    <TextInput
      onSubmitEditing={(e) => onSubmit(e.nativeEvent.text)}
      style={styles.input}
      placeholder="Cherche une ville.. Example: Paris"></TextInput>
  );
}
