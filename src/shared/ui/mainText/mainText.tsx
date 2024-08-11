import { FC } from "react";
import { Text } from "@mantine/core";
import "./mainText.scss";

interface IMainText {
  text: string | undefined;
}

export const MainText: FC<IMainText> = ({ text }) => {
  return (
    <Text mb={15} size="md" className="main-text">
      {text}
    </Text>
  );
};
