import { TouchableOpacity } from "react-native";
import { OrderProps } from "../../../@types/types";
import { DeleteAllIcon, FilterOrderContainer, OrderIcon } from "./styles";

export const OrderDeleteAll = ({ onOrder, onDeleteAll }: OrderProps) => {
  return (
    <FilterOrderContainer>
      {/* <InputFilterContainer>
          <MaterialCommunityIcons
            name="filter"
            size={24}
            color={theme["--gray-300"]}
          />

          <FilterInput
            placeholderTextColor="#808080"
            placeholder="Filtrar lista por..."
            onChangeText={setFilterList}
            value={filterList}
          />
        </InputFilterContainer> */}

      <TouchableOpacity onPress={onOrder}>
        <OrderIcon />
      </TouchableOpacity>
      <TouchableOpacity>
        <DeleteAllIcon onPress={onDeleteAll} />
      </TouchableOpacity>
    </FilterOrderContainer>
  );
};
