FROM node:18.13.0 as build

WORKDIR /usr/app/www

COPY ./package-lock.json .
COPY ./package.json .

RUN npm install -g serve
RUN npm ci

COPY . .

RUN npm run build

FROM nginx:stable-alpine

COPY --from=build /usr/app/www/build /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/nginx.conf

CMD [ "nginx", "-g", "daemon off;" ]