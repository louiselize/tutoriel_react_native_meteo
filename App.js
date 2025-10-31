import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Home } from "./pages/Home";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Home />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
