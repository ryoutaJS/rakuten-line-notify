import Link from "next/link";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import { Title } from "../Title/Title";
import { useFetchItemsData } from "./ItemsCard.hooks";

/* 商品名のスタイル */
// 商品名の表示が折り返しで3行を超えた場合は3点リーダー（…）で省略して表示する
const itemNameStyle = {
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 3,
  overflow: "hidden",
  textOverflow: "ellipsis",
  height: 60,
};

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
          <CardContent>
            <Typography
              variant="body2"
              title={data.itemName}
              sx={itemNameStyle}
            >
              {data.itemName}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </>
  );
};
