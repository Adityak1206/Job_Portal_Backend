# Step 1: Use the official Node.js image
FROM node:18

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json to the container
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Install nodemon globally (for development)
RUN npm install -g nodemon

# Step 6: Copy the rest of the application code to the container
COPY . .

# Step 7: Set environment variables (optional)
ENV NODE_ENV=development

# Step 8: Expose the application's port
EXPOSE 8080

# Step 9: Define the default command to run the application with nodemon
CMD ["npm", "run", "server"]
