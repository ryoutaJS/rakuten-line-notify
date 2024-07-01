import requests
from get_api_key import get_api_key


def fetch_rakuten_item(item_code: str) -> dict:
    """
    楽天APIから特定の商品データを取得
    item_code: str - 楽天APIの商品コード
    return: dict   - 商品情報データ
    """

    RAKUTEN_API_URL = "https://app.rakuten.co.jp/services/api/IchibaItem/Search/20220601"
    params = {
        "applicationId": get_api_key("RAKUTEN_API_KEY"),
        "itemCode": item_code,
    }
    
    response: dict = requests.get(RAKUTEN_API_URL, params=params)
    
    if response.status_code == 200:
        data = response.json()
        return data['Items'][0]['Item']
    else:
        response.raise_for_status()
