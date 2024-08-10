import { FC } from "react";
import { Image, Text } from "@mantine/core";
import { MainTitle } from "../../../shared/ui/mainTitle";
import { MainText } from "../../../shared/ui/mainText";
import "./productContent.scss";

export const ProductContent: FC = () => {
  return (
    <section className="product-content">
      <div className="product-content__wrapper">
        <Image
          className="product-content__image"
          w={800}
          radius="md"
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
        />
        <div className="product-content__text-content">
          <Text c={"#2e2d2d"} mb={5} fw={700}>
            category
          </Text>
          <MainTitle name="Product name" />
          <MainText text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid eaque, eius saepe harum tempore exercitationem voluptate corporis. Dolorem voluptatem voluptates ipsum repudiandae ipsam odit vero! Cum corrupti aspernatur cupiditate aperiam?" />
          <Text fw={500} mb={5} size="xl">
            Rating: 3.5
          </Text>
          <Text fw={600} size="xl">
            Price: 120$
          </Text>
        </div>
      </div>
    </section>
  );
};
