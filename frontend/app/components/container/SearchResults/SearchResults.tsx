import { itemData } from "@/app/type/types";
import Link from "next/link";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";

const itemNameStyle = {
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 3,
  overflow: "hidden",
  textOverflow: "ellipsis",
  height: 60,
  marginBottom: "3%",
};

export const SearchResults = ({ data }: { data: itemData }) => {
  const removeImageSizeParams = (url: string) => {
    return url.split("?")[0];
  };

  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat("ja-JP", {
      style: "currency",
      currency: "JPY",
    }).format(price);
  };

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card>
        <Link href={data.itemUrl} target="_blank">
          <CardMedia
            component="img"
            height="200"
            image={removeImageSizeParams(data.mediumImageUrls[0].imageUrl)}
            sx={{ objectFit: "contain" }}
          />
        </Link>
        <CardContent sx={{ paddingBottom: "2px" }}>
          <Typography variant="body2" title={data.itemName} sx={itemNameStyle}>
            {data.itemName}
          </Typography>
          <Typography variant="body1" fontWeight="bold">
            {formatPrice(data.itemPrice)}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "center" }}>
          <Button variant="contained" sx={{ fontWeight: 550 }}>
            <AddIcon fontSize="small" />
            リストに追加
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
