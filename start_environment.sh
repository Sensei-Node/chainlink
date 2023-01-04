#!/bin/bash
DOCKER_DEFAULT_NETWORK="chainlink_default"
HERE="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
source ${HERE}/.env


docker run --network ${DOCKER_DEFAULT_NETWORK} -v ${HERE}/chainlink:/home/chainlink -it --env-file=${HERE}/.env -p 6688:6688 --rm chainlink:latest local node
