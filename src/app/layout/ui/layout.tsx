import "./layout.scss";
import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../../../widgets/header";

export const Layout: FC = () => {
  return (
    <div className="layout__wrapper">
      <Header />
      <main className="layout__content">
        <div className="layout__container">
          <Outlet />
        </div>
      </main>
    </div>
  );
};
