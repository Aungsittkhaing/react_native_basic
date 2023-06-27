import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function SandBox() {
  return (
    <View style={styles.container}>
      <Text style={styles.cardOne}>One</Text>
      <Text style={styles.cardTwo}>Two</Text>
      <Text style={styles.cardThree}>Three</Text>
      <Text style={styles.cardFour}>Four</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
    paddingTop: 40,
    backgroundColor: "#ddd",
  },
  cardOne: {
    flex: 1,
    backgroundColor: "red",
    padding: 10,
  },
  cardTwo: {
    flex: 2,
    backgroundColor: "blue",
    padding: 10,
  },
  cardThree: {
    flex: 1,
    backgroundColor: "green",
    padding: 10,
  },
  cardFour: {
    flex: 2,
    backgroundColor: "yellow",
    padding: 10,
  },
});
