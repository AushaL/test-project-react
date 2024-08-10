import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Group, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { MantineLogo } from "@mantinex/mantine-logo";
import { ROUTES } from "../../../shared/constants/routes";
import "./header.scss";

const links = [
  { link: ROUTES.DEFAULT, label: "Main" },
  { link: ROUTES.PRODUCTS, label: "Products" },
];

export const Header: FC = () => {
  const [active, setActive] = useState(links[0].link);
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => (
    <Link
      key={link.label}
      to={link.link}
      className="header__link"
      data-active={active === link.link || undefined}
      onClick={() => {
        setActive(link.link);
      }}
    >
      {link.label}
    </Link>
  ));

  return (
    <header className="header">
      <Container size="xl" className="header__inner">
        <MantineLogo size={28} />
        <nav>
          <Group gap={5} visibleFrom="xs">
            {items}
          </Group>
        </nav>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
};
