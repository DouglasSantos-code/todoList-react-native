import { buttonTypeProps } from "../../Home/styles";
import { AddInput, ButtonInput, ButtonText, Form } from "./styles";

export const AddInputList = ({
  isBgButton,
  inputRef,
  setTaskName,
  taskName,
  onAddNewTask,
}: any) => {
  return (
    <Form>
      <AddInput
        ref={inputRef}
        type={isBgButton as buttonTypeProps}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor="#808080"
        onChangeText={setTaskName}
        value={taskName}
      />
      <ButtonInput
        type={isBgButton as buttonTypeProps}
        disabled={taskName == ""}
        onPress={onAddNewTask}
      >
        <ButtonText>+</ButtonText>
      </ButtonInput>
    </Form>
  );
};
