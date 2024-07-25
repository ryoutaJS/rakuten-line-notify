import { itemData } from "@/app/type/types";
import { apiClient } from "@/app/utils/baseApi";
import { useRouter } from "next/navigation";

export const usePutItem = () => {
  const router = useRouter();

  /**
   * 画像URLからサイズ指定のパラメータを削除して返す
   * @param imageUrl 商品画像のURL
   */
  const removeImageSizeParams = (imageUrl: string): string => {
    return imageUrl.split("?")[0];
  };

  /**
   * 商品データ登録APIを実行
   * @param data 楽天の商品データ
   */
  const putItemData = async (data: itemData): Promise<void> => {
    try {
      await apiClient(
        "/api/put_item",
        "POST",
        "no-store",
        JSON.stringify({
          itemCode: data.itemCode,
          itemName: data.itemName,
          itemPrice: data.itemPrice.toString(),
          itemUrl: data.itemUrl,
          imageUrl: removeImageSizeParams(data.mediumImageUrls[0].imageUrl),
        }),
      );
      router.refresh();
    } catch (e) {
      console.log(e);
    }
  };

  return { removeImageSizeParams, putItemData };
};
