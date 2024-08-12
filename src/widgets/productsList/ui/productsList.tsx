import { SimpleGrid, Container } from "@mantine/core";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../shared/constants/routes";
import { FC, useEffect } from "react";
import { ProductCard } from "../../../entities/productCard";
import "./productsList.scss";
import { useAppDispatch, useAppSelector } from "../../../app/store/hooks";
import { fetchProductsList } from "../../../entities/products/model/products.actions";
import { RootState } from "../../../app/store";
import { selectSearchValue } from "../../../entities/search/model/search.selectors";

export const ProductsList: FC = () => {
  const dispatch = useAppDispatch();
  const searchValue = useAppSelector(selectSearchValue);

  const items = useAppSelector((state: RootState) => state.products.items);

  const filteredProducts = items
    ?.filter((item) => {
      if (item.title.toLocaleLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      } else {
        return false;
      }
    })
    .map((item) => {
      return (
        <Link to={`${ROUTES.PRODUCTS}/${item.id}`} key={item.id}>
          <ProductCard
            imageUrl={item.image}
            title={item.title}
            price={item.price}
          />
        </Link>
      );
    });

  useEffect(() => {
    dispatch(fetchProductsList());
  }, []);

  return (
    <Container py="xl">
      <SimpleGrid cols={{ base: 1, sm: 2 }}>{filteredProducts}</SimpleGrid>
    </Container>
  );
};
