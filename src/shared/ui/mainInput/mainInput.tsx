import { FC, useState } from "react";
import { Input, CloseButton } from "@mantine/core";
import "./mainInput.scss";

interface IMainInput {
  onClear: () => void;
  onInputChange: (value: string) => void;
}

export const MainInput: FC<IMainInput> = ({ onClear, onInputChange }) => {
  const [value, setValue] = useState("");
  return (
    <>
      <Input
        placeholder="Clearable input"
        value={value}
        onChange={(event) => {
          setValue(event.currentTarget.value);
          onInputChange(value);
        }}
        rightSectionPointerEvents="all"
        rightSection={
          <CloseButton
            aria-label="Clear input"
            onClick={() => {
              setValue("");
              onClear();
            }}
            style={{ display: value ? undefined : "none" }}
          />
        }
      />
    </>
  );
};
