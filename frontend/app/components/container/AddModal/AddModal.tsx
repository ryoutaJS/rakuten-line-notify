import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";

const boxStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "#f5f5f5",
  boxShadow: 24,
  p: 3,
  width: { xs: "90%", sm: "80%", xl: "60%" },
};

interface Props {
  open: boolean;
  handleClose(): void;
}

export const AddModal = (props: Props) => {
  return (
    <>
      <Modal open={props.open} onClose={props.handleClose}>
        <Box sx={boxStyle}>
          <form>
            <TextField
              placeholder="ほしいものリストに追加する商品を検索"
              fullWidth
              defaultValue=""
            />
          </form>
        </Box>
      </Modal>
    </>
  );
};
