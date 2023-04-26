import { TouchableOpacity, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { MyListProps } from "../../../@types/types";
import { BoxList, DeleteIcon, EditIcon } from "./styles";

export const ListComponent = ({
  name,
  isChecked,
  isBgButton,
  onCheck,
  onEdit,
  onDelete,
}: MyListProps) => (
  <View>
    <BoxList>
      <BouncyCheckbox
        disabled={isBgButton === "SECONDARY"}
        fillColor="#4ea8de"
        text={name}
        isChecked={isChecked}
        textStyle={{ color: "#f2f2f2", fontSize: 14 }}
        bounceEffectIn={0.8}
        onPress={() => onCheck(name, !isChecked)}
        style={{ flex: 1 }}
      />

      <TouchableOpacity
        disabled={isBgButton === "SECONDARY"}
        onPress={() => onEdit(name)}
      >
        <EditIcon />
      </TouchableOpacity>

      <TouchableOpacity
        disabled={isBgButton === "SECONDARY"}
        onPress={() => onDelete(name)}
      >
        <DeleteIcon />
      </TouchableOpacity>
    </BoxList>
  </View>
);
