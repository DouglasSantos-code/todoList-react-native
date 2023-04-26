import { View, Text } from "react-native";
import { styles } from "./styles";

export const ListEmpty = () => {
  return (
    <>
      <Text style={styles.t}>Você ainda não tem tarefas cadastradas</Text>
      <Text style={styles.t}>Crie tarefas e organize seus itens a fazer</Text>
    </>
  );
};
