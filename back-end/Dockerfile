# FROM node:18-alpine

# WORKDIR /app
# COPY package.json package-lock.json tsconfig.json ./

# RUN npm ci && npm cache clean --force

# COPY . .

# EXPOSE 3000
# CMD ["npm", "run", "local"]


FROM node:18-alpine

WORKDIR /app
COPY package.json package-lock.json tsconfig.json ./

RUN npm ci && npm cache clean --force
RUN npm run build

COPY . .

EXPOSE 3000
CMD ["node", "./dist/index.js"]
