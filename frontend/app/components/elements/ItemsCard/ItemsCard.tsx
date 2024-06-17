import Link from "next/link";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

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
      {itemsData.map((data) => (
        <Card key={data.genreId}>
          <Link href={data.itemUrl} target="_blank">
            <CardMedia
              component="img"
              height="250"
              image={data.imageUrl}
              style={{ objectFit: "contain" }}
            />
          </Link>
        </Card>
      ))}
    </>
  );
};
