import { FC } from "react";
import { Button } from "@mantine/core";
import "./mainButton.scss";

interface IMainButton {
  title: string;
  variant?: string;
}

export const MainButton: FC<IMainButton> = ({ title, variant }) => {
  return <Button variant={variant}>{title}</Button>;
};
