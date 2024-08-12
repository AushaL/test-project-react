import { FC, useState } from "react";
import { NativeSelect } from "@mantine/core";
import "./selectInput.scss";

interface ISelectInputProps {
  options: string[];
  onSelectInput: (value: string) => void;
}

export const SelectInput: FC<ISelectInputProps> = ({
  options,
  onSelectInput,
}) => {
  const [value, setValue] = useState("sort by desc");

  return (
    <NativeSelect
      value={value}
      onChange={(event) => {
        setValue(event.currentTarget.value);
        onSelectInput(value);
      }}
      data={options}
    />
  );
};
