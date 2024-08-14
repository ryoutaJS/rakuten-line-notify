// 楽天の商品一覧の型情報
export type itemsData = { items: itemData[] }

// 楽天の商品データの型情報
export type itemData = {
  itemCode: string
  itemName: string
  itemPrice: number
  itemUrl: string
  mediumImageUrls: { imageUrl: string }[]
}
