#!/bin/bash

HERE="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )" 

set -a
source ${HERE}/.env

echo "[ $(date;) ] - BEGIN" >> $LOG_FILE_DOLAR
echo "[ $(date;) - NPX VERSION:  $(npx --version)" >> $LOG_FILE_DOLAR

echo "${CL_CLIENT_ADDRESS_DOLAR}" >> $LOG_FILE_DOLAR

cd ${HERE}
npx hardhat requestDolar --verbose --client-address "${CL_CLIENT_ADDRESS_DOLAR}" --operator-address "${CL_OPERATOR_ADDRESS_DOLAR}" --job-id "${CL_JOB_ID_DOLAR}" >>${LOG_FILE_DOLAR}
echo "[ $(date;) ] - END" >> $LOG_FILE_DOLAR
