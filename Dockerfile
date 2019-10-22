FROM node:12.2.0-alpine
RUN mkdir -p /app
# set working directory
WORKDIR /app/

COPY package.json /app/package.json

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
# install and cache app dependencies

RUN npm install

COPY . /app

# start app
CMD ["npm", "start"]
