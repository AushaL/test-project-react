import { FC } from "react";
import { Title } from "@mantine/core";

interface IInputLabelProps {
  value: string;
}

export const InputLabel: FC<IInputLabelProps> = ({ value }) => {
  return (
    <Title ta="left" size="md" mb={5}>
      {value}
    </Title>
  );
};
