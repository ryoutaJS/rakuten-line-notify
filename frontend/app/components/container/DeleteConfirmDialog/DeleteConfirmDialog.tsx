import { useState } from 'react'
import { useDeleteItem } from './DeleteConfirmDialog.hooks'
import { itemData } from '@/app/type/types'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import LoadingButton from '@mui/lab/LoadingButton'

/**
 * 商品名のスタイル
 * @description 商品名の表示が折り返しで5行を超えた場合は3点リーダー「…」で省略して表示
 */
const itemNameStyle = {
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 5,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
}

interface Props {
  open: boolean
  handleClose: () => void
  data: itemData
}

export const DeleteConfirmDialog = (props: Props) => {
  const { deleteItem } = useDeleteItem(props.data.itemCode)
  const [loading, setLoading] = useState(false)

  const clickOkButton = async () => {
    setLoading(true)
    await deleteItem()
    setLoading(false)
  }

  return (
    <>
      <Dialog open={props.open} onClose={props.handleClose}>
        <DialogTitle fontFamily="monospace">こちらの商品を削除します。よろしいですか？</DialogTitle>
        <DialogContent dividers sx={{ display: 'flex', gap: '3%' }}>
          <Box
            component="img"
            sx={{ width: 120, height: 'auto' }}
            alt={props.data.itemName}
            src={props.data.mediumImageUrls[0].imageUrl}
          />
          <DialogContentText sx={itemNameStyle}>{props.data.itemName}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={props.handleClose}>
            キャンセル
          </Button>
          <LoadingButton loading={loading} variant="contained" onClick={clickOkButton} autoFocus>
            OK
          </LoadingButton>
        </DialogActions>
      </Dialog>
    </>
  )
}
