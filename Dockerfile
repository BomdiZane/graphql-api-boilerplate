FROM node:10

EXPOSE 3000
WORKDIR /user/bob-api
COPY . .
RUN npm install

CMD ["npm", "start"]
