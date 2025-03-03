import { View, StyleSheet, Alert, ImageBackground } from 'react-native'
import React, { useEffect, useState } from 'react'
import TodoTaskAdder from '../component/TodoTaskAdder';
import Todolist from '../component/Todolist';
import { getData, storeData } from '../utils/Storedata';
import Navigation from '../component/Navigation';

export default function Todolistapp() {

  const [tododata, setTododata] = useState([]);
  const [task, setTask] = useState("");

  const themes = [
    {
      id: 1,
      name: "Jungle",
      bgImage: require("../assets/jungle.jpg"),
      btnColor: "#9a7b50",
      taskColor: "#a5c481"
    },
    {
      id: 2,
      name: "Beach",
      bgImage: require("../assets/beach.png"),
      btnColor: "#594b65",
      taskColor: "#eb966f"
    },
    {
      id: 3,
      name: "Hills",
      bgImage: require("../assets/hill.png"),
      btnColor: "#0e3645",
      taskColor: "#6fa09e"
    },
    {
      id: 4,
      name: "Rain",
      bgImage: require("../assets/rain.png"),
      btnColor: "#273546",
      taskColor: "#9cacc5"
    },
    {
      id: 5,
      name: "Snowfall",
      bgImage: require("../assets/winter.png"),
      btnColor: "#245079",
      taskColor: "#aebac3"
    },
    {
      id: 6,
      name: "Clouds",
      bgImage: require("../assets/clouds.png"),
      btnColor: "#648cb1",
      taskColor: "#9fbdd4"
    },
    {
      id: 7,
      name: "Space",
      bgImage: require("../assets/space.png"),
      btnColor: "#555555",
      taskColor: "#848484"
    },
    {
      id: 8,
      name: "School",
      bgImage: require("../assets/school.png"),
      btnColor: "rgb(158, 93, 44)",
      taskColor: "rgb(113, 138, 110)"
    },
    {
      id: 9,
      name: "Tech",
      bgImage: require("../assets/tech.png"),
      btnColor: "#08505f",
      taskColor: "#19b4c5"
    },
  ];

  const [themeSelected, setThemeSelected] = useState(themes[0]);

  const themeChange = (id) => {

    setThemeSelected(themes[id-1]);
  };

  useEffect(() => {

    async function loadTodos() {
      const loadedTodos = await getData("todos");
      if (loadedTodos) {
        setTododata(loadedTodos);
      }
    }

    loadTodos();

  }, []);

  useEffect(() => {

    storeData("todos", tododata);

  }, [tododata]);

  const handleDelete = (id) => {

    const filteredData = tododata.filter((todo) => todo.id !== id);
    setTododata(filteredData);
  };

  const handleCheck = (id) => {

    const changedData = tododata.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isComplete: !todo.isComplete };
      }
      return todo;
    });
    setTododata(changedData);
  };

  const handleAdd = () => {

    if (task === "") {
      Alert.alert("Error", "Tasks cannot be empty");
      return;
    };

    if (tododata.some((todo) => todo.data.toLowerCase() === task.toLowerCase())) {
      Alert.alert("Error", "Duplicate tasks are not allowed");
      return;
    }

    setTododata([{
      id: task,
      data: task,
      isComplete: false
    }, ...tododata]);

    setTask("");

  };

  return (
    <ImageBackground source={themeSelected.bgImage} style={styles.backgroundContainer}>
      <View style={styles.maincontainer}>
        <Navigation themeData={themes} themeChange={themeChange} taskColor={themeSelected.taskColor} />
        <TodoTaskAdder task={task} setTask={setTask} handleAdd={handleAdd} btnColor={themeSelected.btnColor} taskColor={themeSelected.taskColor} />
        <Todolist tododata={tododata} handleDelete={handleDelete} handleCheck={handleCheck} taskColor={themeSelected.taskColor}/>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    padding: 5,
    paddingTop: 10
  },
  backgroundContainer: {
    flex: 1,
    resizeMode: "contain"
  }
});