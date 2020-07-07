FROM python:3
WORKDIR /user/src/app
COPY ./SchoolSystem .

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt


CMD ["python", "./main.py"]
EXPOSE 5000
