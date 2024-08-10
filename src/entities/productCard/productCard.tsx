import { FC } from "react";
import { Image, Text, AspectRatio } from "@mantine/core";
import "./productCard.scss";

interface ICardProps {
  imageUrl: string;
  title: string;
  price: string;
}

export const ProductCard: FC<ICardProps> = ({ imageUrl, title, price }) => {
  return (
    <div className="product-card">
      <AspectRatio ratio={1920 / 1080}>
        <Image src={imageUrl} />
      </AspectRatio>
      <Text
        className="products-list__title"
        size="md"
        c={"#000000"}
        mt={10}
        mb={5}
      >
        {title}
      </Text>
      <Text size="lg" c={"#000000"} tt="uppercase" fw={700}>
        {price} $
      </Text>
    </div>
  );
};
