/**
 * 商品価格を「¥#,###」のフォーマットに変換する
 * @param price 商品価格
 * @return フォーマット変換後の商品価格
 */
export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("ja-JP", {
    style: "currency",
    currency: "JPY",
  }).format(price);
};
