export type buttonTypeProps = "PRIMARY" | "SECONDARY";

export type TaskProps = {
  id: string | number[];
  name: string;
  isChecked: boolean;
};

export type ButtonInputProps = {
  type: buttonTypeProps;
};

export type AmountListProps = {
  list: TaskProps[];
};

export type MyListProps = {
  name: string;
  isChecked: boolean;
  isBgButton: string;
  onCheck: (name: string, check: boolean) => void;
  onEdit: (name: string) => void;
  onDelete: (name: string) => void;
};

export type OrderProps = {
  onOrder: () => void;
  onDeleteAll: () => void;
};
