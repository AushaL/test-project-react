import "./layout.scss";
import { FC } from "react";
import { Outlet } from "react-router-dom";

export const Layout: FC = () => {
  return (
    <div className="wrapper">
      <header>{/* add component from another layer */}</header>
      <main className="content">
        <div className="container">
          <Outlet />
        </div>
      </main>
    </div>
  );
};
