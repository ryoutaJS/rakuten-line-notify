import { apiClient } from "../../../utils/baseApi";
import { productsData, productData} from "../../../type/types"

/**
 * 楽天の商品データを取得するapiを呼び出す
 * @description ローカル環境のモックapiから楽天の商品データを取得して返す
 */
export const useFetchProductsData = () => {
  const fetchProductsData = async (): Promise<productData[]> => {
    const productsData: productsData = await apiClient(
      "/api/fetch_products",
      "GET",
      "no-store",
    );
    return productsData.products;
  };

  return { fetchProductsData };
};