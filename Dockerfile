FROM node:18

WORKDIR /app

COPY package*.json *.lock ./

RUN mkdir -p /usr/local/apache2/logs

COPY ./apache/conf /usr/local/apache2/conf

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy the rest of the app files
COPY . .

RUN npx prisma generate

RUN yarn build

EXPOSE 3000

CMD ["npx", "next", "start"]
