FROM node:13-alpine

WORKDIR /home/node/app

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

USER node

COPY . /

RUN npm install

COPY --chown=node:node . .

EXPOSE 4001


CMD [ "node", "index.js" ]
