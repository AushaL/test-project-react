import { FC } from "react";
import { Title } from "@mantine/core";
import "./mainTitle.scss";

interface IMainTitle {
  name: string;
}

export const MainTitle: FC<IMainTitle> = ({ name }) => {
  return <Title className="main-title">{name}</Title>;
};
