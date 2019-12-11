#!/bin/bash

tar -czf front.tgz build && \
scp -o StrictHostKeyChecking=no -i deploy-travis -v -r front.tgz ${REMOTE_USER}@${REMOTE_HOST}:${REMOTE_PATH} && \
ssh -o StrictHostKeyChecking=no -i deploy-travis -v $REMOTE_USER@$REMOTE_HOST 'bash -s' < ./scripts/untar.sh

# COMMAND="cd ${REMOTE_PATH} && git pull"

# ssh -o StrictHostKeyChecking=no -i deploy-travis -v ${REMOTE_USER}@${REMOTE_HOST} ${COMMAND}