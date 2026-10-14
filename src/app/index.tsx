import { Text, View, StyleSheet } from "react-native";
import {Link} from "expo-router";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Contaê App</Text>
      <Link href="/sobre" style={styles.button}>Sobre</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#182237",
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'none',
    color: '#f7750a',
  }
});
