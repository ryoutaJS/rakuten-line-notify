from item.fetch_item_handler import fetch_item_handler
from fetch_rakuten_item import fetch_rakuten_item
from send_line_notify import send_line_notify


def handler(event, context) -> None:
    """
    楽天APIから取得した商品価格とDynamoDBに登録している楽天の商品価格を比較して、
    お買い得になっていた場合、自分のアカウントにLINE通知を送る。
    """
    
    db_results: dict = fetch_item_handler()

    for db_result in db_results["items"]:
        rakuten_item_data: dict = fetch_rakuten_item(
            item_code=db_result["itemCode"]
        )
        
        if rakuten_item_data["itemPrice"] < int(db_result["itemPrice"]):
            discount: int = int(db_result["itemPrice"]) - rakuten_item_data["itemPrice"]
            send_line_notify(
                discount=discount,
                item_url=rakuten_item_data["itemUrl"]
            )
