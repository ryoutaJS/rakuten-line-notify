import { itemData } from "@/app/type/types";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

interface Props {
  open: boolean;
  handleClose: () => void;
  data: itemData;
}

export const DeleteConfirmDialog = (props: Props) => {
  return (
    <>
      <Dialog open={props.open} onClose={props.handleClose}>
        <DialogTitle fontWeight={550}>
          こちらの商品を削除します。よろしいですか？
        </DialogTitle>
        <DialogContent sx={{ display: "flex", gap: "3%" }}>
          <Box
            component="img"
            sx={{ width: 120, height: "auto" }}
            alt={props.data.itemName}
            src={props.data.imageUrl}
          />
          <DialogContentText>{props.data.itemName}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={props.handleClose}>
            キャンセル
          </Button>
          <Button variant="contained">OK</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
