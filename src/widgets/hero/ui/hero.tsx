import { FC } from "react";
import { Container, Text, Button, Group } from "@mantine/core";
import { GithubIcon } from "@mantinex/dev-icons";
import "./hero.scss";

export const Hero: FC = () => {
  return (
    <section>
      <div className="hero__wrapper">
        <Container size={700} className="hero__inner">
          <h1 className="hero__title">
            A{" "}
            <Text
              component="span"
              variant="gradient"
              gradient={{ from: "blue", to: "cyan" }}
              inherit
            >
              fully featured
            </Text>{" "}
            React components and hooks library
          </h1>

          <Text mt={20} className="hero__description" color="dimmed">
            Build fully functional accessible web applications with ease –
            Mantine includes more than 100 customizable components and hooks to
            cover you in any situation
          </Text>

          <Group className="hero__controls">
            <Button
              size="xl"
              className="hero__control"
              variant="gradient"
              gradient={{ from: "blue", to: "cyan" }}
            >
              Get started
            </Button>

            <Button
              component="a"
              href="https://github.com/mantinedev/mantine"
              size="xl"
              variant="default"
              className="hero__control"
              leftSection={<GithubIcon size={20} />}
            >
              GitHub
            </Button>
          </Group>
        </Container>
      </div>
    </section>
  );
};
