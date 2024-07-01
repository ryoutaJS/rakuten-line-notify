import logging
import requests
from get_api_key import get_api_key


def send_line_notify(discount: int, item_url: str) -> None:
    """
    お買い得情報のLINE通知を送る
    discount: int - 商品の割引額
    item_url: str - 商品ページのURL
    """

    LINE_NOTIFY_API_URL = "https://notify-api.line.me/api/notify"
    LINE_NOTIFY_TOKEN = get_api_key("LINE_NOTIFY_TOKEN")

    headers = {"Authorization": f"Bearer {LINE_NOTIFY_TOKEN}"}
    data = {"message": f"以下の商品が{discount}円お買い得になりました！{item_url}"}
    try:
        requests.post(
            url=LINE_NOTIFY_API_URL,
            headers=headers,
            data=data,
        )
    except Exception as e:
        logging.error(e)
        print("LINE通知処理でエラーが発生しました。")