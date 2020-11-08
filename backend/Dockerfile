# Main Dockerfile

# Create docker with node. Alpine means a lighter version of node.
FROM node:alpine

# Inside of the docker container this will be the working directory
WORKDIR /usr/app

# Copy package.json file first
COPY package*.json ./

# Copy wait-for-postgres script
COPY wait-for-postgres.sh ./

# Install npm (node package manager)
RUN npm install

# Install postgresql-client to run wait-for-postgres script
RUN apk update && apk add postgresql-client

# Copy the rest of the application (except .dockerignore files)
COPY . .

