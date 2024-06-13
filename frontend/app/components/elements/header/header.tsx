"use client";

import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";

import AppBar from "@mui/material/AppBar";
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

export const Header = () => {
  return (
    <>
      <AppBar component="nav">
        <Toolbar>
          <NotifyIcon />
          <HeaderTitle variant="h5">Rakuten Price Notify</HeaderTitle>
        </Toolbar>
      </AppBar>
    </>
  );
};
