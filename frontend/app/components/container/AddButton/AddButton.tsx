"use client";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import { AddModal } from "../AddModal/AddModal";
import { useState } from "react";

const buttonStyle = {
  position: "fixed",
  bottom: 24,
  right: 24,
};

export const AddButton = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Fab color="primary" sx={buttonStyle} onClick={handleOpen}>
        <AddIcon />
      </Fab>
      <AddModal open={open} handleClose={handleClose} />
    </>
  );
};
