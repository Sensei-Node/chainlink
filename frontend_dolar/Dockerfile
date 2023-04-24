FROM node:lts-alpine
LABEL "Maintainer"="Rickk Barbosa"
LABEL "e-mail"="ricardo@senseinode.com"
LABEL "Description"="frontend dollar" 
LABEL "version"="1.0.0"

ENV NODE_ENV=production
ENV REACT_APP_CONTRACT_ADDRESS_DOLAR="0x1066e98E4D944B62b8a5eC56D666eC17d7cb8EC7"
ENV REACT_APP_CONTRACT_ADDRESS_ETH="0xB00D88867825ADb50aa4E4A85925E6ACca307Aba"
ENV REACT_APP_RPC_PROVIDER_URL="https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"

USER root
RUN mkdir -p /var/www/html
WORKDIR /var/www/html

#RUN apk update && apk add php
COPY . /var/www/html

EXPOSE 3000

RUN npm install
CMD ["npm", "start"]
