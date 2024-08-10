import { FC } from "react";
import { Image, Text } from "@mantine/core";
import { MainTitle } from "../../../shared/ui/mainTitle";
import { MainText } from "../../../shared/ui/mainText";
import "./productContent.scss";

export const ProductContent: FC = () => {
  return (
    <section className="product-content">
      <Image
        className="product-content__image"
        radius="md"
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
      />
      <Text className="product-content__category" fw={700}>
        Bold
      </Text>
      <MainTitle name="Default text" />
      <Text className="product-content__description" size="lg">
        Large text
      </Text>
      <MainText text="text" />
      <Text className="product-content__rating" size="xl">
        Extra large text
      </Text>
      <Text className="product-content__price" fw={500}>
        Semibold
      </Text>
    </section>
  );
};
