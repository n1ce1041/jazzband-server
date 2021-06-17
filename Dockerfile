FROM node:14-alpine
WORKDIR /app
COPY . /app
EXPOSE 5000
RUN ["npm", "install"]
ADD initialize.sh /home/MM0312/docker-entrypoint-initdb.d/initialize.sh
CMD ["npm", "start","/home/MM0312/docker-entrypoint-initdb.d/initialize.sh"]
