import { useFetchItemsData } from "./ItemsCard.hooks";

export const ItemsCard = async () => {
  const { fetchItemsData } = useFetchItemsData();
  const itemsData = await fetchItemsData();

  console.log(itemsData);

  return <></>;
};
