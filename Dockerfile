FROM node:10

EXPOSE 3001
WORKDIR /user/graphql-api-boilerplate
COPY . .
RUN npm install

CMD ["npm", "start"]
