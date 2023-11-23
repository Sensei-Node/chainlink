FROM smartcontract/chainlink:2.1.1-root

# Create the chainlink node root path
RUN mkdir -p /home/chainlink

ENV API_USER_EMAIL $API_USER_EMAIL
ENV API_USER_PASSWORD $API_USER_PASSWORD
ENV WALLET_PASSWORD $WALLET_PASSWORD

# Create chainlink node required values to initioalize with
RUN echo $API_USER_EMAIL > /home/chainlink/.api
RUN echo $API_USER_PASSWORD >> /home/chainlink/.api
RUN echo $WALLET_PASSWORD > /home/chainlink/.password
RUN echo "TESTING" > /home/chainlink/test
