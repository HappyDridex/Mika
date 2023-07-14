FROM node:18.13.0 as build

WORKDIR /usr/data/www

RUN npm install -g serve
RUN npm ci

RUN npm run build

FROM nginx:stable-alpine

COPY ./nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/data/www/build /usr/data/www/build

CMD [ "nginx", "-g", "daemon off;" ]