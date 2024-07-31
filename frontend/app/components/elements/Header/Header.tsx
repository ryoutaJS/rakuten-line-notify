"use client";

import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import styled from "@mui/material/styles/styled";

// 通知アイコンのスタイル
const NotifyIcon = styled(CircleNotificationsIcon)({
  fontSize: 35,
});

// ヘッダータイトルのスタイル
const HeaderTitle = styled(Typography)({
  fontWeight: "bold",
  fontFamily: "monospace",
  marginLeft: ".5rem",
  letterSpacing: ".15rem",
});

// ヘッダー内の要素を中央揃え
const CenterBox = styled(Box)({
  flexGrow: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const Header = () => {
  return (
    <>
      <AppBar component="nav" position="sticky">
        <Toolbar>
          <CenterBox>
            <NotifyIcon />
            <HeaderTitle variant="h5">楽天価格通知アプリ</HeaderTitle>
          </CenterBox>
        </Toolbar>
      </AppBar>
    </>
  );
};
