import "./layout.scss";
import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../../../widgets/header";
import { Container } from "@mantine/core";

export const Layout: FC = () => {
  return (
    <div className="layout__wrapper">
      <Header />
      <main className="layout__content">
        <Container size="xl">
          <Outlet />
        </Container>
      </main>
    </div>
  );
};
