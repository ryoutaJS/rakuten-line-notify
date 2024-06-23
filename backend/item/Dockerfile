FROM public.ecr.aws/lambda/python:3.12

COPY item/requirements.txt ${LAMBDA_TASK_ROOT}/requirements.txt

COPY item/main.py ${LAMBDA_TASK_ROOT}/main.py
COPY item/fetch_item_handler.py ${LAMBDA_TASK_ROOT}/fetch_item_handler.py

COPY db/table.py ${LAMBDA_TASK_ROOT}/db/table.py

RUN python3.12 -m pip install -r requirements.txt -t .

CMD ["main.handler"]
