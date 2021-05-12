FROM node:lts-alpine as build-stage

WORKDIR /app
COPY package*json ./
RUN npm install
COPY . /app

ARG PORT
ENV PORT=$PORT

RUN npm run build

FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx.conf /etc/nginx/conf.d

EXPOSE $PORT
CMD ["nginx", "-g", "daemon off;"]