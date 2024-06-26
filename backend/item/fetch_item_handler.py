import os

from db.table import get_table


def fetch_item_handler() -> dict:
    """
    Itemsテーブルから全ての商品データを取得して返す
    戻り値: dict - 商品データ
    """
    table = get_table(table_name="Items")

    response   = table.scan()
    db_results = response['Items']

    # createdAtの昇順でソート
    db_results = sorted(db_results, key=lambda data: data["createdAt"])

    return { "items": db_results }
