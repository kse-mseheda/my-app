FROM node:20-alpine@sha256:f598378b5240225e6beab68fa9f356db1fb8efe55173e6d4d8153113bb8f333c AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci --production

FROM node:20-alpine@sha256:f598378b5240225e6beab68fa9f356db1fb8efe55173e6d4d8153113bb8f333c
WORKDIR /app
COPY --from=build /app/node_modules ./node_modules
COPY . .

EXPOSE 3000

# preconfigured non-root user in the official Node.js image
USER node 

CMD ["node", "index.js"]