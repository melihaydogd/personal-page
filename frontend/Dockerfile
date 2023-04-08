FROM node:18.15.0-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install
RUN npm install -g serve
COPY . .

ARG REACT_APP_API_URL
RUN REACT_APP_API_URL=$REACT_APP_API_URL npm run build

EXPOSE 3000
CMD ["serve", "-s", "build", "-l", "3000"]