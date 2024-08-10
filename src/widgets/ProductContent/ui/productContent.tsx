import { FC } from "react";
import { Image, Title, Text } from "@mantine/core";
import "./productContent.scss";

export const ProductContent: FC = () => {
  return (
    <div className="product-content">
      <Image
        className="product-content__image"
        radius="md"
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
      />
      <Text className="product-content__category" fw={700}>
        Bold
      </Text>
      <Title className="product-content__title">This is h1 title</Title>
      <Text className="product-content__description" size="lg">
        Large text
      </Text>
      <Text className="product-content__category" size="md">
        Default text
      </Text>
      <Text className="product-content__rating" size="xl">
        Extra large text
      </Text>
      <Text className="product-content__price" fw={500}>
        Semibold
      </Text>
    </div>
  );
};
