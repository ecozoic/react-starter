FROM node:6.11.2-alpine

# node-gyp deps
RUN apk add python make gcc g++ --no-cache

COPY . .

RUN yarn
RUN yarn build

EXPOSE 8080
CMD ["yarn", "serve"]
