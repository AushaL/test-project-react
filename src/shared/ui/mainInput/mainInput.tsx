import { FC, useState } from "react";
import { Input, CloseButton } from "@mantine/core";
import "./mainInput.scss";

export const MainInput: FC = () => {
  const [value, setValue] = useState("");
  return (
    <>
      <Input
        placeholder="Clearable input"
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
        rightSectionPointerEvents="all"
        mt="md"
        rightSection={
          <CloseButton
            aria-label="Clear input"
            onClick={() => setValue("")}
            style={{ display: value ? undefined : "none" }}
          />
        }
      />
    </>
  );
};
