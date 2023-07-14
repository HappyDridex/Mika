FROM node:18.13.0 as build

WORKDIR /usr/app/www

COPY ./package-lock.json .
COPY ./package.json .

RUN npm install -g serve
RUN npm ci

COPY . .

RUN npm run build

FROM nginx:stable-alpine

COPY ./nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/app/www/build /usr/app/www/build

CMD [ "nginx", "-g", "daemon off;" ]