FROM node:10

EXPOSE 3001
WORKDIR /user/full-stack-boilerplate-api
COPY . .
RUN npm install

CMD ["npm", "start"]
