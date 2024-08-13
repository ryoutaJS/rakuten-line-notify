from decimal import Decimal
from item.fetch_item_handler import decimal_to_int, sort_items_by_created_at


def test_decimal_to_int_with_decimal():
    assert decimal_to_int(Decimal("10")) == 10


def test_decimal_to_int_with_not_decimal():
    assert decimal_to_int("string") == "string"
    assert decimal_to_int(10) == 10


def test_sort_items_by_created_at():
    mock_items_data = [
        {"id": 1, "createdAt": "2023-10-01T10:00:00Z"},
        {"id": 2, "createdAt": "2023-09-01T10:00:00Z"},
        {"id": 3, "createdAt": "2023-11-01T10:00:00Z"},
    ]

    sorted_items = sort_items_by_created_at(mock_items_data)

    assert sorted_items[0]["id"] == 2
    assert sorted_items[1]["id"] == 1
    assert sorted_items[2]["id"] == 3
