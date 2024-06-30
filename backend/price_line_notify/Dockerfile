FROM public.ecr.aws/lambda/python:3.12

COPY price_line_notify/requirements.txt ${LAMBDA_TASK_ROOT}/requirements.txt

COPY price_line_notify/main.py ${LAMBDA_TASK_ROOT}/main.py

RUN python3.12 -m pip install -r requirements.txt -t .

CMD ["main.handler"]