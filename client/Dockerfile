FROM node:latest
WORKDIR /app

COPY package.json ./
RUN yarn

COPY tsconfig.json ./
COPY src ./src

CMD [ "yarn", "dev" ]

EXPOSE 3000