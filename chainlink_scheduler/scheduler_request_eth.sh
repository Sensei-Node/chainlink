#!/bin/bash

#sleep 300
HERE="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )" 

set -a
source ${HERE}/.env

echo "[ $(date;) ] - BEGIN" >> $LOG_FILE_ETH
echo "[ $(date;) - NPX VERSION:  $(npx --version)" >> $LOG_FILE_ETH

echo "${CL_CLIENT_ADDRESS_ETH}" >> $LOG_FILE_ETH

cd ${HERE}
npx hardhat requestEth --verbose --client-address "${CL_CLIENT_ADDRESS_ETH}" --operator-address "${CL_OPERATOR_ADDRESS_ETH}" --job-id "${CL_JOB_ID_ETH}" >>${LOG_FILE_ETH}
echo "[ $(date;) ] - END" >> $LOG_FILE_ETH

