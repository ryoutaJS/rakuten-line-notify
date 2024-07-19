import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";

const buttonStyle = {
  position: "fixed",
  bottom: 24,
  right: 24,
};

export const AddButton = () => {
  return (
    <>
      <Fab color="primary" sx={buttonStyle}>
        <AddIcon />
      </Fab>
    </>
  );
};
