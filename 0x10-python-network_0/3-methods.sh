#!/bin/bash
# This script takes in a URL and displays all HTTP methods that the server accepts.
curl -sI "$1" | grep "Allow:" | cut -d " " -f2-
