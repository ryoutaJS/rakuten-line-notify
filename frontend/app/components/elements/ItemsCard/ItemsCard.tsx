import Link from "next/link";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
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

/**
 * 商品価格を「¥#,###」のフォーマットに変換する
 * @param price {number} - 商品価格
 * @requires {string} フォーマット変換後の商品価格
 */
function formatCurrency(price: number): string {
  return new Intl.NumberFormat("ja-JP", {
    style: "currency",
    currency: "JPY",
  }).format(price);
}

export const ItemsCard = async () => {
  const { fetchItemsData } = useFetchItemsData();
  const itemsData = await fetchItemsData();

  return (
    <>
      <Container maxWidth="xl">
        <div style={{ marginTop: "2%", marginBottom: "1%" }}>
          <Title />
        </div>
        <Grid container rowSpacing={2} columnSpacing={2}>
          {itemsData.map((data) => (
            <Grid key={data.itemCode} item xs={12} sm={6} md={3} lg={2}>
              <Card key={data.itemCode}>
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
                  <Typography variant="body1" color="text.secondary">
                    {formatCurrency(data.itemPrice)}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};
