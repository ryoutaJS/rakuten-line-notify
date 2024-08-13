FROM python:3.12

COPY item/fetch_item_handler.py item/fetch_item_handler.py
COPY price_line_notify/ ./
COPY db/table.py db/table.py
COPY tests/ tests/

COPY tests/requirements.txt requirements.txt

RUN pip install --no-cache-dir -r requirements.txt

CMD ["pytest", "tests"]