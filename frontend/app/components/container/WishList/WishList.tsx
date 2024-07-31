import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Title } from "../../elements/Title/Title";
import { ItemCard } from "../ItemCard/ItemCard";
import { useFetchItemsData } from "./WishList.hooks";
import { itemData } from "@/app/type/types";

export const WishList = async () => {
  const { fetchItemsData } = useFetchItemsData();
  const itemsData: itemData[] = await fetchItemsData();

  return (
    <>
      <Container maxWidth="xl" sx={{ marginBottom: 11 }}>
        <Title />
        <Grid container rowSpacing={2} columnSpacing={2}>
          {itemsData.map((data) => (
            <ItemCard key={data.itemCode} data={data} />
          ))}
        </Grid>
      </Container>
    </>
  );
};
