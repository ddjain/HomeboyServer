FROM node
MAINTAINER Darshan Jain
WORKDIR /usr/src/app
COPY Node/ ./
CMD [ "cd", "Node"]
RUN npm install
EXPOSE 8080
CMD [ "cd", "api"]
CMD [ "node", "api.js"]