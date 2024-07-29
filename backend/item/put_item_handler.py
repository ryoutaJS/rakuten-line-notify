from datetime import datetime

from db.table import get_table


def put_item_handler(payload: dict):
    """楽天の商品データを登録"""
    get_table("Items").put_item(
        Item={
            "createdAt": str(datetime.now()),
            "itemCode": payload["itemCode"],
            "itemName": payload["itemName"],
            "itemPrice": payload["itemPrice"],
            "itemUrl": payload["itemUrl"],
            "mediumImageUrls": [
                {
                    "imageUrl": payload["imageUrl"],
                }
            ],
        }
    )

    return {"isSuccess": True}
