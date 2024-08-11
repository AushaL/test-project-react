import { FC, useEffect } from "react";
// import axios from "axios";
import { useParams } from "react-router-dom";
import { Image, Text } from "@mantine/core";
import { MainTitle } from "../../../shared/ui/mainTitle";
import { MainText } from "../../../shared/ui/mainText";
import "./productContent.scss";
// import { IProduct } from "../../../shared/constants/interfaces";
import { useAppDispatch, useAppSelector } from "../../../app/store/hooks";
import { fetchFullProduct } from "../../../entities/productCard/model";
import { RootState } from "../../../app/store";

export const ProductContent: FC = () => {
  const dispatch = useAppDispatch();
  const product = useAppSelector((state: RootState) => state.product.item);
  const { id } = useParams();
  // const [product, setProduct] = useState<IProduct | null>(null);

  // useEffect(() => {
  //   async function fetchProduct() {
  //     const { data } = await axios.get(
  //       `https://fakestoreapi.com/products/${id}`
  //     );
  //     setProduct(data);
  //   }
  //   fetchProduct();
  // }, []);

  useEffect(() => {
    dispatch(fetchFullProduct(id));
  }, []);

  return (
    <section className="product-content">
      <div className="product-content__wrapper">
        <Image
          className="product-content__image"
          w={500}
          radius="md"
          src={product?.image}
        />
        <div className="product-content__text-content">
          <Text c={"#2e2d2d"} mb={5} fw={700}>
            {product?.category}
          </Text>
          <MainTitle name={product?.title} />
          <MainText text={product?.description} />
          <Text fw={500} mb={5} size="xl">
            Rating: {product?.rating.rate}
          </Text>
          <Text fw={600} size="xl">
            Price: {product?.price}$
          </Text>
        </div>
      </div>
    </section>
  );
};
