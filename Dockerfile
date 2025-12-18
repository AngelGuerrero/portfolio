FROM node:14-alpine

WORKDIR /app

RUN apk add --no-cache \
    python3 \
    make \
    g++ \
    git

RUN ln -sf python3 /usr/bin/python

COPY package.json yarn.lock* package-lock.json* ./

RUN npm config set python python3

RUN if [ -f yarn.lock ]; then yarn install --frozen-lockfile; \
    elif [ -f package-lock.json ]; then npm ci; \
    else npm install; \
    fi

COPY . .

EXPOSE 3000

ENV NODE_ENV=development
ENV HOST=0.0.0.0
ENV PORT=3000

CMD ["npm", "run", "dev"]

