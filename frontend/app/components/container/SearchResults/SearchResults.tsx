import { useState } from 'react'
import { formatPrice } from '@/app/utils/format'
import { itemData } from '@/app/type/types'
import { usePutItem } from './SearchResults.hooks'
import Link from 'next/link'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import LoadingButton from '@mui/lab/LoadingButton'
import AddIcon from '@mui/icons-material/Add'

const itemNameStyle = {
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 3,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  height: 60,
  marginBottom: '3%',
}

type Props = {
  data: itemData
  modalClose: () => void
}

export const SearchResults = (props: Props) => {
  const { putItemData, removeImageSizeParams } = usePutItem(props.modalClose)
  const [loading, setLoading] = useState(false)

  const clickAddButton = async (data: itemData) => {
    setLoading(true)
    await putItemData(data)
    setLoading(false)
  }

  // 商品画像が存在しない場合は「NO IMAGE」の画像を表示
  let imageUrl: string | undefined = props.data.mediumImageUrls[0]?.imageUrl
  if (imageUrl) {
    imageUrl = removeImageSizeParams(imageUrl)
  } else {
    imageUrl = '/images/no_image.png'
  }

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card>
        <Link href={props.data.itemUrl} target="_blank">
          <CardMedia component="img" height="200" image={imageUrl} sx={{ objectFit: 'contain' }} />
        </Link>
        <CardContent sx={{ paddingBottom: '2px' }}>
          <Typography variant="body2" title={props.data.itemName} sx={itemNameStyle}>
            {props.data.itemName}
          </Typography>
          <Typography variant="body1" fontWeight="bold">
            {formatPrice(props.data.itemPrice)}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: 'center' }}>
          <LoadingButton
            loading={loading}
            variant="contained"
            sx={{ fontWeight: 550 }}
            onClick={() => clickAddButton(props.data)}
          >
            <AddIcon fontSize="small" />
            リストに追加
          </LoadingButton>
        </CardActions>
      </Card>
    </Grid>
  )
}
