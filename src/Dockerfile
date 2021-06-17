FROM node:14-alpine
WORKDIR /app
COPY package.json /app/
COPY .env /app/
RUN ["npm", "install"]
COPY . /app/
EXPOSE 5000
ENTRYPOINT ["npm" , "run", "start"]