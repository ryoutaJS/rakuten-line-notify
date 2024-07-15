import { apiClient } from "@/app/utils/baseApi";
import { useRouter } from "next/navigation";

export const useDeleteItem = (itemCode: string) => {
  const router = useRouter()

  /**
   * 商品データ削除API
   * @description DynamoDBの商品データを削除する
  */
  const deleteItem = async (): Promise<void> => {
    try {
      await apiClient(
        "/api/delete_item",
        "POST",
        "no-store",
        JSON.stringify({"itemCode": itemCode})
      );
     router.refresh();
    } catch (e) {
      console.log(e)
    }
  };

  return { deleteItem }
};
