#!/bin/bash

HERE="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )" 

set -a
source ${HERE}/.env

echo "[ $(date;) ] - BEGIN" >> $LOG_FILE
echo "[ $(date;) - NPX VERSION:  $(npx --version)" >> $LOG_FILE

cd ${HERE}
npx hardhat requestEth --verbose --client-address "${CL_CLIENT_ADDRESS}" --operator-address "${CL_OPERATOR_ADDRESS}" --job-id "${CL_JOB_ID}" >>${LOG_FILE}
echo "[ $(date;) ] - END" >> $LOG_FILE
