# Build Stage
FROM node:18 AS build
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json /app/

# Remove old dependencies if present
RUN rm -rf node_modules && npm cache clean --force

# Install dependencies
RUN npm install --force

# Copy the rest of the application code
COPY ./ /app/

# Build the Angular app for production
RUN npm run build -- --output-path=dist/dec-front --configuration production

# Run Stage
FROM nginx:1.21-alpine AS production-stage
# Step to update Alpine packages and fix vulnerabilities

RUN apk update && \
    apk upgrade && \
    apk add --no-cache \
    curl \
    pcre2 \
    zlib \
    libxml2 \
    openssl

# Copy custom nginx configuration if you have one (optional)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built Angular files to Nginx's html directory
COPY --from=build /app/dist/dec-front/browser  /usr/share/nginx/html

# Expose port 80 for Nginx
EXPOSE 80
# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]


