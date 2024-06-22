FROM node:16 as build

WORKDIR /usr/src/app

COPY . .

RUN npm i && cd app && npm i && cd ../ && npm run build

FROM node:alpine as main

COPY --from=build /usr/src/app /

EXPOSE 3030

CMD ["node", "build/app.js"]
