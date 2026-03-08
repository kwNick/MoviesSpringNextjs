#bullseye instead of alpine because alpine uses musl instead of glibc, which can cause compatibility issues with some npm packages. Using bullseye ensures better compatibility while still providing a lightweight image.
# FROM node:20-bullseye AS deps
# WORKDIR /app
# COPY package*.json ./
# RUN npm install --legacy-peer-deps

# FROM node:20-bullseye AS builder
# WORKDIR /app
# COPY . .
# COPY --from=deps /app/node_modules ./node_modules
# RUN npm run build

# FROM node:20-bullseye AS runner
# WORKDIR /app
# ENV NODE_ENV=production

# COPY --from=builder /app/public ./public
# COPY --from=builder /app/.next ./.next
# COPY --from=builder /app/node_modules ./node_modules
# COPY --from=builder /app/package.json ./package.json

# EXPOSE 3000
# CMD ["npm", "start"]

#Trying this way because of symlinks in heroicons
# Use Debian-based Node image for compatibility
FROM node:20-bullseye AS builder
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Copy the rest of the source code (node_modules ignored via .dockerignore)
COPY . .

# Build Next.js app
RUN npm run build

# Production image
FROM node:20-bullseye AS runner
WORKDIR /app
ENV NODE_ENV=production

# Copy built files and node_modules
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000
CMD ["npm", "start"]