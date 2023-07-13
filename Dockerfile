FROM node:18.13.0 as build

WORKDIR /usr/data/www

COPY ./package-lock.json .
COPY ./package.json .

RUN npm install -g serve
RUN npm ci

COPY . .
RUN npm run build