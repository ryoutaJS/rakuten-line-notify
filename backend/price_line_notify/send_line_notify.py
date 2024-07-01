import logging
import requests
from get_api_key import get_api_key


def send_line_notify(discount: int, item_url: str) -> None:
    """
    お買い得情報のLINE通知を送る
    discount: int - 商品の割引額
    item_url: str - 商品ページのURL
    """

    line_notify_api = "https://notify-api.line.me/api/notify"
    line_notify_token = get_api_key("LINE_NOTIFY_TOKEN")

    headers = {"Authorization": f"Bearer {line_notify_token}"}
    data = {"message": f"以下の商品が{discount}円お買い得になりました！{item_url}"}
    try:
        requests.post(
            url=line_notify_api,
            headers=headers,
            data=data,
        )
    except Exception as e:
        logging.error(e)
        print("LINE通知処理でエラーが発生しました。")