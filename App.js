import { StyleSheet } from "react-native";
import Main from "./Main";
import { Provider } from "react-native-paper";
export default function App() {
  return (
    <Provider>
      <Main />
    </Provider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
