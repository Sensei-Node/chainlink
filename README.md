# chainlink

## Run the node 

### first step : start postgres

run : `docker compose up -d postgres`

This start the docker exposing the default ports. 
This db is used by the node. 

### second step : run the node the first time
``` cp -r config.sample config ```

To run the node first of all we have to have in mind the following fields : 

| Field | Description |
| --- | --- |
| keystore password | To create the wallet node address |
| API email | This is used to access to the dashboard |
| API password | This is used to access to the dashboard |

and you have to complete all the files with propper information

| File | Description |
| --- | --- |
| secret.toml | keystore pass and postgres url |
| config.toml | rpc's, Logs level, chain id |
| .password | This is used to access to the dashboard |
| .api | This is used to access to the dashboard |


### third step : restart  

run 
`docker compose up -d chainlink`

stop the docker process like 
`docker compose stop chainlink`

https://docs.chain.link/chainlink-nodes/v1/running-a-chainlink-node
