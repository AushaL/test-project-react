import { FC } from "react";
import { Title } from "@mantine/core";
import "./mainTitle.scss";

interface IMainTitle {
  name: string | undefined;
}

export const MainTitle: FC<IMainTitle> = ({ name }) => {
  return (
    <Title mb={15} className="main-title">
      {name}
    </Title>
  );
};
