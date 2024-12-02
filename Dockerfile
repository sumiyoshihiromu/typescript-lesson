FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install # package.jsonに基づいて依存パッケージをインストール

COPY . .

RUN npm run build # TypeScriptのコンパイル

CMD ["node", "dist/index.js"]