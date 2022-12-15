#!/bin/bash
# This script takes in a URL as its first argument and sends a DELETE Response!
curl -sX DELETE "$1"
