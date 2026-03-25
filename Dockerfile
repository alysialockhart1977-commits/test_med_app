# Use official Node.js image
FROM node:20.19.0

# Set working directory
WORKDIR /usr/src/app

# Copy root package files first
COPY package*.json ./

# Install root dependencies (frontend build tools, React, Vite)
RUN npm install

# Copy server package files and install backend dependencies
COPY server/package*.json ./server/
RUN cd server && npm install

# Copy the rest of the application
COPY . .

# Build the frontend and move it to server/build
RUN npm run build

# Expose backend port
EXPOSE 8181

# Run the server application
CMD ["node", "server/index.js"]