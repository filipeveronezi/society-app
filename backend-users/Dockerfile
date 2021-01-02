# Main Dockerfile

# Create docker with node. Alpine means a lighter version of node.
FROM node:alpine

# Inside of the docker container this will be the working directory
WORKDIR /usr/users-api

# Copy package.json file first
COPY package*.json ./

# Install postgresql-client to run wait-for-postgres script (UNUSED for now)
RUN apk update && apk add postgresql-client

# Copy the rest of the application (except .dockerignore files)
COPY . .

# Install node modules
RUN yarn install