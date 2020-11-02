# Main Dockerfile

# Create docker with node. Alpine means a lighter version of node.
FROM node:alpine

# Inside of the docker container this will be the working directory
WORKDIR /usr/app

# Copy package.json file first
COPY package*.json ./

# Install npm (node package manager)
RUN npm install

# Copy the rest of the application (except .dockerignore files)
COPY . .