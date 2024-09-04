'use client'

import { itemData } from '@/app/type/types'
import { useEffect, useState } from 'react'
import { useFetchItemsData } from './AddModal.hooks'
import { SearchBar } from '../SearchBar/SearchBar'
import { SearchResults } from '../SearchResults/SearchResults'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import Modal from '@mui/material/Modal'
import Typography from '@mui/material/Typography'
import CloseIcon from '@mui/icons-material/Close'

const boxStyle = {
  margin: '65px auto 0',
  bgcolor: 'background.paper',
  boxShadow: 24,
  px: 3,
  pb: 3,
  overflowY: 'auto',
  maxHeight: '80vh',
  width: { xs: '90%', sm: '80%', xl: '60%' },
}

const headerStyle = {
  position: 'sticky',
  top: 0,
  bgcolor: 'background.paper',
  zIndex: 1,
  pt: 3,
}

interface Props {
  open: boolean
  modalClose(): void
}

export const AddModal = (props: Props) => {
  const [itemsData, setItemsData] = useState<itemData[]>([])
  const { fetchItemsData } = useFetchItemsData()

  const onSearch = async (searchText: string) => {
    const result: itemData[] = await fetchItemsData(searchText)
    setItemsData(result)
  }

  useEffect(() => {
    if (!props.open) {
      setItemsData([])
    }
  }, [props.open])

  return (
    <>
      <Modal open={props.open} onClose={props.modalClose}>
        <Box sx={boxStyle}>
          <Box sx={headerStyle}>
            <IconButton onClick={props.modalClose} sx={{ float: 'right' }}>
              <CloseIcon />
            </IconButton>

            <Typography variant="h5" fontFamily="monospace">
              ほしいものリストに追加
            </Typography>

            <SearchBar onSearch={onSearch} />
          </Box>

          <Grid container spacing={2}>
            {itemsData.map((data, index) => (
              <SearchResults key={index} data={data} modalClose={props.modalClose} />
            ))}
          </Grid>
        </Box>
      </Modal>
    </>
  )
}
