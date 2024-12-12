FROM node:18

WORKDIR /app

# Install PostgreSQL client tools
RUN apt-get update && apt-get install -y postgresql-client && rm -rf /var/lib/apt/lists/*

COPY package*.json ./
RUN npm install

COPY . .

# Ensure the script has executable permissions
RUN chmod +x wait-for-database-ready.sh

EXPOSE 3000

CMD ["npm", "run", "dev"]