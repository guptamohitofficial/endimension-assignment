FROM python:3.6
RUN mkdir /app
WORKDIR /app
ADD ./apiEndi/requirements.txt /app/api/

RUN pip install -r api/requirements.txt

ADD ./docker /app/docker
ADD ./apiEndi /app/api