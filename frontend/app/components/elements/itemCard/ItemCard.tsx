import Link from "next/link";
import { itemData } from "@/app/type/types";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

/* 商品名のスタイル */
// 商品名の表示が折り返しで3行を超えた場合は3点リーダー（…）で省略して表示する
const itemNameStyle = {
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 3,
  overflow: "hidden",
  textOverflow: "ellipsis",
  height: 60,
  marginBottom: "2%",
};

/**
 * 商品価格を「¥#,###」のフォーマットに変換する
 * @param price {number} - 商品価格
 * @return {string} フォーマット変換後の商品価格
 */
const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("ja-JP", {
    style: "currency",
    currency: "JPY",
  }).format(price);
};

export const ItemCard = ({ data }: { data: itemData }) => {
  return (
    <>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Card>
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
              {formatPrice(data.itemPrice)}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};
