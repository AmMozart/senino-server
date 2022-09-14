FROM node as development

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

FROM node as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /app

COPY package*.json .

RUN npm ci --only=production

COPY --from=development /app/server/build .

CMD ["node", "server/build/index.js"]