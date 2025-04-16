FROM node:alpine

WORKDIR /client

COPY package.json package-lock.json* ./
RUN npm install -g @angular/cli && npm install

COPY . .

EXPOSE 4200
CMD ["ng", "serve", "--host", "0.0.0.0","--poll=1000"]