'use client'
import { itemData } from '@/app/type/types'
import { useEffect, useState } from 'react'
import { useFetchItemsData } from './AddModal.hooks'
import { SearchBar } from '../SearchBar/SearchBar'
import { SearchResults } from '../SearchResults/SearchResults'
import { Box, Grid, Modal } from '@mui/material'

const boxStyle = {
  margin: '50px auto 0',
  bgcolor: 'background.paper',
  borderRadius: '5px',
  boxShadow: 24,
  pt: 3,
  px: 3,
  width: { xs: '90%', sm: '80%', xl: '60%' },
}

const searchResultsStyle = {
  overflowY: 'auto',
  maxHeight: '75vh',
  pb: 3,
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
          <SearchBar onSearch={onSearch} />

          <Box sx={searchResultsStyle}>
            <Grid container spacing={2}>
              {itemsData.map((data, index) => (
                <SearchResults key={index} data={data} modalClose={props.modalClose} />
              ))}
            </Grid>
          </Box>
        </Box>
      </Modal>
    </>
  )
}
