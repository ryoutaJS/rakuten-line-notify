import json
import logging

from fetch_item_handler import fetch_item_handler


def handler(event, context):
    handler_mapping = {
        "/api/fetch_item": fetch_item_handler,
    }
    try:
        path = event["path"]
        handler = handler_mapping[path]

        result = handler()
        status_code = 200

    except Exception as e:
        logging.exception(e)
        status_code = 500
        result = {"message": "InternalServerError"}

    finally:
        return {
            "isBase64Encoded": False,
            "statusCode": status_code,
            "headers": {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "OPTIONS, POST",
                "Access-Control-Allow-Headers": "Content-Type",
            },
            "body": json.dumps(result),
        }