FROM node:lts-alpine
LABEL "Maintainer"="Rickk Barbosa"
LABEL "e-mail"="ricardo@senseinode.com"
LABEL "Description"="frontend dollar" 
LABEL "version"="1.0.0"

ENV NODE_ENV=production
USER root
RUN mkdir -p /var/www/html
WORKDIR /var/www/html

#RUN apk update && apk add php
COPY . /var/www/html

EXPOSE 3000

RUN npm install
CMD ["npm", "start"]
