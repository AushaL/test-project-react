import { FC, useState } from "react";
import { NativeSelect } from "@mantine/core";
import "./selectInput.scss";

interface ISelectInputProps {
  options: string[];
}

export const SelectInput: FC<ISelectInputProps> = ({ options }) => {
  const [value, setValue] = useState("");

  return (
    <NativeSelect
      value={value}
      onChange={(event) => setValue(event.currentTarget.value)}
      data={options}
    />
  );
};
