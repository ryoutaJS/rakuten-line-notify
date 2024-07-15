from db.table import get_table


def delete_item_handler(payload: dict) -> dict:
    """Itemsテーブルの商品データを削除する"""
    table = get_table(table_name="Items")
    table.delete_item(Key={"itemCode": payload["itemCode"]})

    return {"isSuccess": True}
