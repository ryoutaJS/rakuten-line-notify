import { apiClient } from "@/app/utils/baseApi";
import { itemsData, itemData } from "@/app/type/types"

/**
 * 楽天の商品データを取得するapiを呼び出す
 * @description ローカル環境のモックapiから楽天の商品データを取得して返す
 */
export const useFetchItemsData = () => {
  const fetchItemsData = async (): Promise<itemData[]> => {
    const itemsData: itemsData = await apiClient(
      "/api/fetch_items",
      "GET",
      "no-store",
    );
    return itemsData.items;
  };

  return { fetchItemsData };
};