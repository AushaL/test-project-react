import { FC } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ROUTES } from "../../../shared/constants/routes";
import { Title, Text, Button, Container, Group } from "@mantine/core";
import "./notFound.scss";

export const NotFound: FC = () => {
  return (
    <>
      <Helmet>
        <title>Page not found</title>
      </Helmet>
      <Container className="root">
        <div className="label">404</div>
        <Title className="title">You have found a secret place.</Title>
        <Text c="dimmed" size="lg" ta="center" className="description">
          Unfortunately, this is only a 404 page. You may have mistyped the
          address, or the page has been moved to another URL.
        </Text>
        <Group justify="center">
          <Button variant="subtle" size="md">
            <Link to={ROUTES.DEFAULT}>Take me back to home page</Link>
          </Button>
        </Group>
      </Container>
    </>
  );
};
