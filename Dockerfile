FROM node:14 as build

WORKDIR /usr/src/app

COPY . .

RUN npm i && cd app && npm i && cd ../ && npm run prisma:generate && npm run build

EXPOSE 3030

CMD ["node", "build/app.js"]
