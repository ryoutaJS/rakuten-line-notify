import { itemData } from "@/app/type/types";

interface RakutenItems {
  Items: { Item: itemData }[];
}

// 楽天のAPIから商品データを取得するhooks
export const useFetchItemsData = () => {
  const fetchItemsData = async (searchText: string): Promise<itemData[]> => {
    const API_KEY = process.env.NEXT_PUBLIC_RAKUTEN_API_KEY;
    const API_URL = process.env.NEXT_PUBLIC_RAKUTEN_API_URL;
    const params = `applicationId=${API_KEY}&keyword=${searchText}`;

    const response = await fetch(API_URL + params);

    if (response.ok) {
      const itemsData: RakutenItems = await response.json();
      return itemsData.Items.map((item) => item.Item);
    } else {
      return [];
    }
  };

  return { fetchItemsData };
};
