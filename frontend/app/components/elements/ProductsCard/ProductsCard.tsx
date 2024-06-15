import { useFetchProductsData } from "./productsCard.hooks";

export const ProductsCard = async () => {
  const { fetchProductsData } = useFetchProductsData();
  const productsData = await fetchProductsData();

  console.log(productsData);

  return <></>;
};
