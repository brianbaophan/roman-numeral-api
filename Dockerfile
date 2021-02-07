FROM node:15.8.0-slim

WORKDIR /usr/src/app

COPY ./package*.json ./

RUN npm install

COPY . .

USER node

EXPOSE 5000

CMD ["npm", "start"]
