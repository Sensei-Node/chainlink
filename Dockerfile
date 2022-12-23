FROM smartcontract/chainlink:$CHAINLINK_VERSION

# Create the chainlink node root path
RUN mkdir /chainlink

ENV API_USER_EMAIL=$API_USER_EMAIL
ENV API_USER_PASSWORD=$API_USER_PASSWORD
ENV WALLET_PASSWORD=$WALLET_PASSWORD

# Create chainlink node required values to initialize with
RUN echo $API_USER_EMAIL > /chainlink/.api
RUN echo $API_USER_PASSWORD >> /chainlink/.api
RUN echo $WALLET_PASSWORD > /chainlink/.password
