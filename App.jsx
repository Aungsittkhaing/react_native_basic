import { useState } from "react";

import {
  Alert,
  FlatList,
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Header from "./components/header";
import ToDoItem from "./components/todoItem";
import AddTodo from "./components/addTodo";
import SandBox from "./components/sandbox";

export default function App() {
  const [todo, setTodo] = useState([
    { text: "to check girl fb acc", key: 1 },
    { text: "to talk her", key: 2 },
    { text: "to date with her", key: 3 },
  ]);

  const pressHandler = (key) => {
    setTodo((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };
  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodo((prevTodo) => {
        return [{ text: text, key: Math.random().toString() }, ...prevTodo];
      });
    } else {
      Alert.alert("Error!", "your word must be over 3 chars long", [
        { text: "Okay", onPress: () => console.log("alert closed") },
      ]);
    }
  };
  return (
    // <SandBox />

    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        console.log("dismiss keyboard");
      }}
    >
      <View style={styles.container}>
        <Header />
        <View style={styles.context}>
          <AddTodo submitHandler={submitHandler} />

          <View style={styles.list}>
            <FlatList
              data={todo}
              renderItem={({ item }) => (
                <ToDoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
  context: {
    padding: 40,
    flex: 1,
  },
  list: {
    marginTop: 20,
    flex: 1,
  },
});
