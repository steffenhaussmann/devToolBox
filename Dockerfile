# Stage 1: Build Angular SSR Application
FROM node:20 AS builder

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy project files
COPY . .

# Build Angular browser and server bundles
RUN npm run build:ssr

# Stage 2: Serve Angular SSR Application
FROM nginx:latest

# Copy browser bundle to Nginx HTML directory
COPY --from=builder /app/dist/devtoolbox/browser /usr/share/nginx/html

# Copy SSR server bundle to a custom location
COPY --from=builder /app/dist/devtoolbox/server /app/server

# Copy server.ts script to run the SSR server
COPY --from=builder /app/server.mjs /app/server/server.mjs

# Expose port 80 for Nginx and 4000 for SSR
EXPOSE 80 4000

# Start SSR server (for API or routes) and Nginx in parallel
CMD ["node", "/app/server/main.js"]
