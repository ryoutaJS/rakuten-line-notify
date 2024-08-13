from unittest.mock import MagicMock

import pytest

from main import send_line_notify_if_price_lower


@pytest.fixture
def mock_send_line_notify(monkeypatch):
    mock_function = MagicMock()
    monkeypatch.setattr("main.send_line_notify", mock_function)

    return mock_function


def test_send_line_notify_if_price_lower(mock_send_line_notify):
    """価格が安い場合のテスト"""

    rakuten_item_data = {
        "itemPrice": 1000,
        "itemUrl": "http://example.com/item",
    }

    db_result = {
        "itemPrice": 2000,
        "itemUrl": "http://example.com/item",
    }

    send_line_notify_if_price_lower(rakuten_item_data, db_result)

    discount: int = db_result["itemPrice"] - rakuten_item_data["itemPrice"]
    
    mock_send_line_notify.assert_called_once_with(
        discount=discount,
        item_url="http://example.com/item",
    )


def test_send_line_notify_if_price_lower_with_same_price(mock_send_line_notify):
    """価格が同じ場合のテスト"""

    rakuten_item_data = {
        "itemPrice": 1000,
        "itemUrl": "http://example.com/item",
    }

    db_result = {
        "itemPrice": 1000,
        "itemUrl": "http://example.com/item",
    }

    send_line_notify_if_price_lower(rakuten_item_data, db_result)

    mock_send_line_notify.assert_not_called()


def test_send_line_notify_if_price_lower_with_high_price(mock_send_line_notify):
    """価格が高い場合のテスト"""

    rakuten_item_data = {
        "itemPrice": 2000,
        "itemUrl": "http://example.com/item",
    }

    db_result = {
        "itemPrice": 1000,
        "itemUrl": "http://example.com/item",
    }

    send_line_notify_if_price_lower(rakuten_item_data, db_result)

    mock_send_line_notify.assert_not_called()
