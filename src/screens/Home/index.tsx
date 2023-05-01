import React, { useState, useEffect, useRef } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { TextInput, Alert, FlatList } from "react-native";

import { ListEmpty } from "../components/ListEmpty";
import { AmountTasks } from "../components/AmountTasks";
import { OrderDeleteAll } from "../components/OrderDeleteAll";
import { ListComponent } from "../components/ListComponent";
import { AddInputList } from "../components/AddInputList";

import { Container, Header, HeaderTitle } from "./styles";

import { TaskProps } from "../../@types/types";

import uuid from "react-native-uuid";

export const Home = () => {
  const [list, setList] = useState<TaskProps[]>([]);
  const [taskName, setTaskName] = useState("");
  const [bgButton, setBgButton] = useState("PRIMARY");
  const [saveInput, SetSaveInput] = useState("");

  const inputElement = useRef<TextInput>(null);

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    const myListString = await AsyncStorage.getItem("@storage_Key");
    let myList = myListString ? JSON.parse(myListString) : [];
    setList(myList);
  };

  useEffect(() => {
    const myListString = JSON.stringify(list);
    AsyncStorage.setItem("@storage_Key", myListString);
  }, [list]);

  useEffect(() => {
    if (taskName.length === 0 && bgButton === "SECONDARY") {
      setList((prevState) => [
        ...prevState,
        { id: uuid.v4(), name: saveInput, isChecked: false },
      ]);
      setBgButton("PRIMARY");
    }
  }, [taskName]);

  // useEffect(() => {
  //   // const newList = [...list];
  //   if (filterList === "") {
  //     setList((prevState) => [...prevState]);
  //   } else {
  //     setList(
  //       list.filter(
  //         (item) =>
  //           item.name.toLowerCase().indexOf(filterList.toLowerCase()) > -1
  //       )
  //     );
  //   }
  // }, [filterList]);

  function handleAddNewTask() {
    setList((prevState) => [
      { id: uuid.v4(), name: taskName, isChecked: false },
      ...prevState,
    ]);
    setTaskName("");
    setBgButton("PRIMARY");
  }

  function handleDeleteAll() {
    if (list.length === 0) {
      return true;
    } else {
      Alert.alert(
        "Remover todas as tasks!",
        "Deseja realmente remover todas as task?",
        [
          {
            text: "sim",
            onPress: () => setList([]),
          },
          {
            text: "Não",
            style: "cancel",
          },
        ]
      );
    }
  }

  function handleDeleteTask(name: string) {
    Alert.alert("Remover task", "Deseja realmente remover essa task?", [
      {
        text: "Sim",
        onPress: () =>
          setList((prevState) =>
            prevState.filter((item) => item.name !== name)
          ),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  function editList(name: string) {
    setList((prevState) => prevState.filter((item) => item.name !== name));
    setTaskName(name);
    SetSaveInput(name);
    setBgButton("SECONDARY");

    inputElement.current?.focus();
  }

  function handleChekedItem(name: string, check: boolean) {
    const newList = [...list];
    newList.filter((item) => {
      if (item.name === name) {
        item.isChecked = check;
      }
    });
    setList(newList);
  }

  function handleOrderList() {
    if (list.length === 0) {
      return true;
    } else {
      let newList = [...list];
      newList.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));
      setList(newList);
    }
  }

  return (
    <Container>
      <Header>
        <HeaderTitle>toDo</HeaderTitle>
      </Header>

      <AddInputList
        isBgButton={bgButton}
        inputRef={inputElement}
        setTaskName={setTaskName}
        taskName={taskName}
        onAddNewTask={handleAddNewTask}
      />

      <AmountTasks list={list} />
      <OrderDeleteAll onOrder={handleOrderList} onDeleteAll={handleDeleteAll} />

      <FlatList
        data={list}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ListComponent
            name={item.name}
            isChecked={item.isChecked}
            isBgButton={bgButton}
            onCheck={handleChekedItem}
            onEdit={editList}
            onDelete={handleDeleteTask}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => <ListEmpty />}
      />
    </Container>
  );
};
