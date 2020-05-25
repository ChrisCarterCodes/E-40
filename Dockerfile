FROM node10

ENV APP_DIR '/app/current'
WORKDIR ${APP_DIR}

COPY . .
RUN npm install

CMD ["node", "bot"]