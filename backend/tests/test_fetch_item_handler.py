# import pytest
from unittest.mock import patch, MagicMock
from decimal import Decimal
from item.fetch_item_handler import decimal_to_int, fetch_item_handler


def test_decimal_to_int_with_decimal():
    assert decimal_to_int(Decimal("10.5")) == 10


def test_decimal_to_int_with_non_decimal():
    assert decimal_to_int("string") == "string"
    assert decimal_to_int(10) == 10


@patch("item.fetch_item_handler.get_table")
def test_fetch_item_handler(mock_get_table):
    # Mock the table and its scan method
    mock_table = MagicMock()
    mock_get_table.return_value = mock_table
    mock_table.scan.return_value = {
        "Items": [
            {
                "itemCode": "1",
                "itemName": "item1",
                "itemPrice": Decimal("10"),
                "itemUrl": "http://item1.com",
                "imageUrl": "item1.png",
                "createdAt": "2023-01-01",
            },
            {
                "itemCode": "2",
                "itemName": "item2",
                "itemPrice": Decimal("20"),
                "itemUrl": "http://item2.com",
                "imageUrl": "item2.png",
                "createdAt": "2023-01-02",
            },
        ]
    }

    expected_result = {
        "items": [
            {
                "itemCode": "1",
                "itemName": "item1",
                "itemPrice": 10,
                "itemUrl": "http://item1.com",
                "imageUrl": "item1.png",
                "createdAt": "2023-01-01",
            },
            {
                "itemCode": "2",
                "itemName": "item2",
                "itemPrice": 20,
                "itemUrl": "http://item2.com",
                "imageUrl": "item2.png",
                "createdAt": "2023-01-02",
            },
        ]
    }

    result = fetch_item_handler()
    assert result == expected_result
