// 楽天の商品一覧の型情報
export type itemsData = { items: itemData[] }

// 楽天の商品データの型情報
export type itemData = {
  genreId: string,
  itemName: string,
  itemPrice: number,
  itemUrl: string,
  imageUrl: string,
}