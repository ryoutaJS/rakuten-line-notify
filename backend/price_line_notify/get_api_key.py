import json

import boto3
from botocore.exceptions import ClientError


def get_api_key(secret_key: str) -> str:
    """
    AWS Secrets Managerで管理しているAPIのアクセスキーを取得
    secret_key: str - シークレットのキー
    return:     str - APIのアクセスキー
    """

    secret_name = "RAKUTEN_PRICE_LINE_NOTIFY"
    region_name = "ap-northeast-1"

    session = boto3.session.Session()
    client = session.client(service_name="secretsmanager", region_name=region_name)

    try:
        get_secret_value_response: dict[str] = client.get_secret_value(
            SecretId=secret_name
        )

    except ClientError as e:
        raise e

    secret: dict = json.loads(get_secret_value_response["SecretString"])

    return secret[secret_key]
