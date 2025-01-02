# Step 1: Use a Node.js image to build the app
FROM node:22 AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the app (output will be in the "dist" folder)
RUN npm run build

# Step 2: Use Nginx to serve the built app
FROM nginx:alpine

# Copy built files from the builder stage to Nginx's default directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80 to allow access to the app
EXPOSE 80

# Command to run Nginx
CMD ["nginx", "-g", "daemon off;"]
