"use client";

import { Divider, IconButton, Tooltip, Typography } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";

export const Title = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <Typography variant="h5">商品一覧</Typography>
        <Tooltip title="一覧に表示されている商品の価格がセールなどで安くなったらLINE通知が届きます。">
          <IconButton>
            <InfoIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </div>
      <Divider />
    </>
  );
};
