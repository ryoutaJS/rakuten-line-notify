import os

import boto3


def get_table(table_name: str):
    """
    DynamoDBの該当のテーブルを取得する共通メソッド
    table_name: str - 取得するテーブル名
    戻り値: dynamodb.table - DynamoDBのテーブル
    """

    db = boto3.resource(
        service_name="dynamodb",
        endpoint_url=os.getenv("DYNAMO_ENDPOINT_URL"),
    )

    return db.Table(table_name)