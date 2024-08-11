import { SimpleGrid, Container } from "@mantine/core";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../shared/constants/routes";
import { FC, useEffect } from "react";
import { ProductCard } from "../../../entities/productCard";
import "./productsList.scss";
import { useAppDispatch, useAppSelector } from "../../../app/store/hooks";
import { fetchProductsList } from "../../../entities/products/model/products.actions";
import { RootState } from "../../../app/store";

export const ProductsList: FC = () => {
  const dispatch = useAppDispatch();

  const items = useAppSelector((state: RootState) => state.products.items);

  useEffect(() => {
    dispatch(fetchProductsList());
  }, []);

  return (
    <Container py="xl">
      <SimpleGrid cols={{ base: 1, sm: 2 }}>
        {/* {filteredProducts} */}
        {items?.map((item) => (
          <Link to={ROUTES.PRODUCT} key={item.id}>
            <ProductCard
              imageUrl={item.image}
              title={item.title}
              price={item.price}
            />
          </Link>
        ))}
      </SimpleGrid>
    </Container>
  );
};
