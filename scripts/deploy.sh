#!/bin/bash

scp -o StrictHostKeyChecking=no -i deploy-travis -r build/static/index.html ${REMOTE_USER}@${REMOTE_HOST}:${REMOTE_PATH}

# COMMAND="cd ${REMOTE_PATH} && git pull"

# ssh -o StrictHostKeyChecking=no -i deploy-travis -v ${REMOTE_USER}@${REMOTE_HOST} ${COMMAND}