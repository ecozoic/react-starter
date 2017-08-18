FROM node:6.11.2

COPY . /tmp/react-starter
WORKDIR "/tmp/react-starter"

ENV HOST=0.0.0.0 \
    PORT=8080 \
    BASENAME=/

RUN yarn
CMD [ "yarn", "serve" ]
