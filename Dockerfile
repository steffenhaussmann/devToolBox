# Stage 1: Build Angular
FROM node:20 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve Angular SSR Application
FROM node:20
WORKDIR /app
COPY --from=builder /dist/devtoolbox/browser /app/browser
COPY --from=builder /dist/devtoolbox/server /app/server

# Expose Ports
EXPOSE 4000

# Start SSR Server
CMD ["node", "/app/server/server.mjs"]
