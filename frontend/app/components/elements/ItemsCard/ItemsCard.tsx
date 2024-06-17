import { Title } from "../Title/Title";
import { useFetchItemsData } from "./ItemsCard.hooks";

export const ItemsCard = async () => {
  const { fetchItemsData } = useFetchItemsData();
  const itemsData = await fetchItemsData();

  return (
    <>
      <div style={{ marginTop: "2%", marginBottom: "1%" }}>
        <Title />
      </div>
    </>
  );
};
