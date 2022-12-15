#!/bin/bash
# This script takes in a URL and GET request to the URL
curl -sL -w "%{http_code}" "$1" -o /dev/null | grep -q "200" && curl -sL "$1"
