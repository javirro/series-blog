# syntax=docker.io/docker/dockerfile:1

# Use a lightweight Node.js image
FROM node:18-alpine AS base

# Set working directory
WORKDIR /app

# Copy package manager files and install dependencies
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./

# Install dependencies while avoiding peer dependency issues
RUN \
  if [ -f yarn.lock ]; then yarn install --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm install --omit=peer; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm install --strict-peer-deps=false; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Copy the rest of the application files
COPY . .

# Build the application
RUN \
  if [ -f yarn.lock ]; then yarn build; \
  elif [ -f package-lock.json ]; then npm run build; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm run build; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Expose port and set environment variables
EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Start the application
CMD ["npm", "start"]
