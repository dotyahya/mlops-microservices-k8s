FROM python:3.11
WORKDIR /code
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
EXPOSE 8001
CMD ["gunicorn", "--bind", "0.0.0.0:8001", "auth_service.wsgi"]