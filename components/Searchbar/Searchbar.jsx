import { TextInput } from "react-native";
import { styles } from "./Searchbar.style";
export function Searchbar({ onSubmit }) {
  return (
    <TextInput
      onSubmitEditing={onSubmit}
      style={styles.input}
      placeholder="Cherche une ville.. Example: Paris"></TextInput>
  );
}
