# chainlink

## Run the node 

### first step : start postgres

run : `docker compose up -d postgres`

This start the docker exposing the default ports. 
This db is used by the node. 

### second step : run the node the first time

To run the node first of all we have to have in mind the following fields : 

| Field | Description |
| --- | --- |
| keystore password | To create the wallet node address |
| API email | This is used to access to the dashboard |
| API password | This is used to access to the dashboard |

The first time we have to run in a interactible way the docker and the procees ask for this fields. 

The script `start_environment.sh` run the node and ask for this fields. 
This fields are saved in the postgres db.





### third step : restart  

If you need to restart you have to prepare the directory : 
`chainlink_data/.api` : The email and the password in the following format. The api email in the first line and in the second the password. 
`chainlink_data/.password` : The password of the keychain 

stop the docker process like 
`docker stop chainlink`

run 
`docker compose up -d chainlink`



https://docs.chain.link/chainlink-nodes/v1/running-a-chainlink-node
