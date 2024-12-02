FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Gitをインストール
RUN apk add git

RUN npm run build

CMD ["npm", "run", "start"]