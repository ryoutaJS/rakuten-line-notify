import { Divider, IconButton, Tooltip, Typography } from '@mui/material'
import InfoIcon from '@mui/icons-material/Info'

export const Title = () => {
  return (
    <>
      <div style={{ marginTop: '2%', marginBottom: '1%' }}>
        <div style={{ display: 'flex' }}>
          <Typography variant="h5" fontFamily="monospace">
            ほしいものリスト
          </Typography>
          <Tooltip title="リストに表示されている商品の価格がセールなどで安くなったらLINE通知が届きます。">
            <IconButton>
              <InfoIcon fontSize="small" color="primary" />
            </IconButton>
          </Tooltip>
        </div>
        <Divider />
      </div>
    </>
  )
}
