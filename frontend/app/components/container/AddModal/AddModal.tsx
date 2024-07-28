"use client";
import { itemData } from "@/app/type/types";
import { FormEvent, useEffect, useState } from "react";
import { useFetchItemsData } from "./AddModal.hooks";
import { SearchResults } from "../SearchResults/SearchResults";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

const boxStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "white",
  boxShadow: 24,
  px: 3,
  pb: 3,
  overflowY: "auto",
  height: "80vh",
  width: { xs: "90%", sm: "80%", xl: "60%" },
};

const headerStyle = {
  position: "sticky",
  top: 0,
  backgroundColor: "white",
  zIndex: 1,
  pt: 3,
};

interface Props {
  open: boolean;
  modalClose(): void;
}

export const AddModal = (props: Props) => {
  const [searchText, setSearchText] = useState("");
  const [itemsData, setItemsData] = useState<itemData[]>([]);
  const { fetchItemsData } = useFetchItemsData();

  const onSearch = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result: itemData[] = await fetchItemsData(searchText);

    setItemsData(result);
  };

  useEffect(() => {
    if (!props.open) {
      setSearchText("");
      setItemsData([]);
    }
  }, [props.open]);

  return (
    <>
      <Modal open={props.open} onClose={props.modalClose}>
        <Box sx={boxStyle}>
          <Box sx={headerStyle}>
            <IconButton onClick={props.modalClose} sx={{ float: "right" }}>
              <CloseIcon />
            </IconButton>
            <Typography variant="h5" fontWeight={550}>
              ほしいものリストに追加
            </Typography>
            <form onSubmit={onSearch}>
              <TextField
                placeholder="商品名を入力（例：スマホ）"
                fullWidth
                defaultValue=""
                sx={{ my: 1 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
                onChange={(e) => setSearchText(e.target.value)}
              />
            </form>
          </Box>
          <Grid container spacing={2}>
            {itemsData.map((data, index) => (
              <SearchResults
                key={index}
                data={data}
                modalClose={props.modalClose}
              />
            ))}
          </Grid>
        </Box>
      </Modal>
    </>
  );
};
