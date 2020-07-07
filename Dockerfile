FROM python:3
WORKDIR /user/src/app
COPY ./SchoolSystem .

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

CMD export FLASK_APP='main'
CMD flask run --host=0.0.0.0
EXPOSE 5000
