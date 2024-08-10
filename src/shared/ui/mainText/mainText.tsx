import { FC } from "react";
import { Text } from "@mantine/core";
import "./mainText.scss";

interface IMainText {
  text: string;
}

export const MainText: FC<IMainText> = ({ text }) => {
  return (
    <Text size="md" className="main-text">
      {text}
    </Text>
  );
};
