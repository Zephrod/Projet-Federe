FROM node:alpine

WORKDIR /app

COPY package.json ./
RUN npm install

COPY . .

CMD ["sh", "-c", "node migrate.js && npm run dev"]