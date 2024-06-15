// 楽天の商品一覧の型情報
export type productsData = { products: productData[] }

// 楽天の商品データの型情報
export type productData = {
  genreId: string,
  itemName: string,
  itemPrice: number,
  itemUrl: string,
  imageUrl: string,
}