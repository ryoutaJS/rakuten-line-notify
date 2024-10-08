'use client'

import Link from 'next/link'
import { formatPrice } from '@/app/utils/format'
import { useState } from 'react'
import { itemData } from '@/app/type/types'
import { DeleteConfirmDialog } from '../DeleteConfirmDialog/DeleteConfirmDialog'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import DeleteIcon from '@mui/icons-material/Delete'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'

/* 商品名のスタイル */
// 商品名の表示が折り返しで2行を超えた場合は3点リーダー（…）で省略して表示する
const itemNameStyle = {
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 2,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  height: 40,
  marginBottom: '2%',
}

const cardStyle = {
  position: 'relative',
  '&:hover .delete-icon': {
    opacity: 1,
    transition: 'opacity 0.4s ease-in-out',
  },
}

const imageStyle = {
  objectFit: 'contain',
  height: { xs: 180, md: 205 },
}

const deleteButtonStyle = {
  position: 'absolute',
  bottom: 0,
  right: 0,
  opacity: 0,
}

type Props = {
  data: itemData
}

export const ItemCard = (props: Props) => {
  const [dialogOpen, setDialogOpen] = useState(false)
  const handleClose = () => setDialogOpen(false)

  return (
    <>
      <Grid item xs={6} sm={4} md={3} lg={2}>
        <Card sx={cardStyle}>
          <Link href={props.data.itemUrl} target="_blank">
            <CardMedia
              component="img"
              sx={imageStyle}
              image={props.data.mediumImageUrls[0].imageUrl}
            />
          </Link>

          <CardContent>
            <Typography variant="body2" title={props.data.itemName} sx={itemNameStyle}>
              {props.data.itemName}
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
              {formatPrice(props.data.itemPrice)}
            </Typography>
          </CardContent>

          <IconButton
            className="delete-icon"
            sx={deleteButtonStyle}
            onClick={() => setDialogOpen(true)}
          >
            <DeleteIcon color="primary" />
          </IconButton>
        </Card>
      </Grid>

      <DeleteConfirmDialog open={dialogOpen} handleClose={handleClose} data={props.data} />
    </>
  )
}
