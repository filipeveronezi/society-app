# Main Dockerfile

# Create docker with node. Alpine means a lighter version of node.
FROM node:alpine

# Inside of the docker container this will be the working directory
WORKDIR /usr/users-api

RUN npm install sequelize sequelize-cli pg pg-hstore --save

# Copy package.json file first
COPY package*.json ./

# Install npm (node package manager)
RUN npm install

# Install postgresql-client to run wait-for-postgres script (UNUSED for now)
RUN apk update && apk add postgresql-client

# Copy the rest of the application (except .dockerignore files)
COPY . .