"use client";
import { itemData } from "@/app/type/types";
import { FormEvent, useState } from "react";
import { useFetchItemsData } from "./AddModal.hooks";
import { SearchResults } from "../SearchResults/SearchResults";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import InputAdornment from "@mui/material/InputAdornment";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";

const boxStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "#f5f5f5",
  boxShadow: 24,
  p: 3,
  overflowY: "auto",
  height: "80vh",
  width: { xs: "90%", sm: "80%", xl: "60%" },
};

interface Props {
  open: boolean;
  handleClose(): void;
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

  return (
    <>
      <Modal open={props.open} onClose={props.handleClose}>
        <Box sx={boxStyle}>
          <Typography variant="h5" fontWeight={550}>
            ほしいものリストに追加
          </Typography>
          <form onSubmit={onSearch}>
            <TextField
              placeholder="ほしいものリストに追加する商品を検索"
              fullWidth
              defaultValue=""
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
          <Grid container spacing={2}>
            {itemsData.map((data, index) => (
              <SearchResults key={index} data={data} />
            ))}
          </Grid>
        </Box>
      </Modal>
    </>
  );
};
