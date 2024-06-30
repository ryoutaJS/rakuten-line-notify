FROM public.ecr.aws/lambda/python:3.12

COPY price_line_notify/requirements.txt ${LAMBDA_TASK_ROOT}/requirements.txt

COPY price_line_notify/main.py ${LAMBDA_TASK_ROOT}/main.py
COPY price_line_notify/fetch_rakuten_item.py ${LAMBDA_TASK_ROOT}/fetch_rakuten_item.py
COPY price_line_notify/get_api_key.py ${LAMBDA_TASK_ROOT}/get_api_key.py
COPY price_line_notify/send_line_notify.py ${LAMBDA_TASK_ROOT}/send_line_notify.py

RUN python3.12 -m pip install -r requirements.txt -t .

CMD ["main.handler"]