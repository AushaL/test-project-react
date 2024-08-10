import { FC } from "react";
import { Image, Text, AspectRatio } from "@mantine/core";
import "./card.scss";

interface ICardProps {
  imageUrl: string;
  title: string;
  price: string;
}

export const Card: FC<ICardProps> = ({ imageUrl, title, price }) => {
  return (
    <div className="card">
      <AspectRatio ratio={1920 / 1080}>
        <Image src={imageUrl} />
      </AspectRatio>
      <Text className="products-list__title" mt={5}>
        {title}
      </Text>
      <Text c="dimmed" size="xs" tt="uppercase" fw={700} mt="md">
        {price} $
      </Text>
    </div>
  );
};
