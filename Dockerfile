# syntax=docker/dockerfile:1

# Use an official Node.js runtime as a parent image
ARG NODE_VERSION=22
FROM node:${NODE_VERSION}-alpine AS build

# Set the working directory
WORKDIR /usr/src/app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm ci --omit=dev

# Copy the rest of the application code
COPY . .

# Build the application (if applicable)
# RUN npm run build

# Use a smaller base image for the final stage
FROM node:${NODE_VERSION}-alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy only the necessary files from the build stage
COPY --from=build /usr/src/app .

# Set environment variables
ENV NODE_ENV production

# Expose the port the app runs on
EXPOSE 3000

# Run the application
CMD ["node", "app.js"]
