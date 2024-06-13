import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export const Header = () => {
  return (
    <>
      <AppBar component="nav">
        <Toolbar>
          <Typography variant="h5">楽天価格通知アプリ</Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};
