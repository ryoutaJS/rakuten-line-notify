from decimal import Decimal
from db.table import get_table


def decimal_to_int(item_data):
    """
    Decimal型の場合はint型に変換して返す
    item_data - DynamoDBから取得した商品データ
    """
    
    if type(item_data) == Decimal:
        return int(item_data)
    else:
        return item_data


def fetch_item_handler() -> dict:
    """
    Itemsテーブルから全ての商品データを取得して返す
    戻り値: dict - 商品データ
    """

    table = get_table(table_name="Items")

    response   = table.scan()
    db_results = response['Items']

    for db_result in db_results:
        for key, value in db_result.items():
            db_result[key] = decimal_to_int(value)

    # createdAtの昇順でソート
    db_results = sorted(db_results, key=lambda data: data["createdAt"])

    return { "items": db_results }
