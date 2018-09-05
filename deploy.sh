#!/bin/bash

kubectl delete namespaces test-ghost
docker build -t jetalone/test-ghost:latest .
docker push docker.io/jetalone/test-ghost:latest

kubectl create namespace test-ghost
kubectl create -f kubernetes/
