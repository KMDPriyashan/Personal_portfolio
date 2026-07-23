# ============================================
# STAGE 1: Build Stage
# ============================================

# Node.js base image එක use කරන්න
FROM node:18-alpine AS build

# Working directory එක set කරන්න
WORKDIR /app

# Package files copy කරන්න
COPY package*.json ./

# Dependencies install කරන්න
RUN npm ci --only=production

# Source code copy කරන්න
COPY . .

# Application build කරන්න
RUN npm run build

# ============================================
# STAGE 2: Production Stage
# ============================================

# Nginx base image එක use කරන්න
FROM nginx:alpine

# Built files copy කරන්න
COPY --from=build /app/dist /usr/share/nginx/html

# Nginx port expose කරන්න
EXPOSE 80

# Nginx start කරන්න
CMD ["nginx", "-g", "daemon off;"]