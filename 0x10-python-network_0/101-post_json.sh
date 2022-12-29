#!/bin/bash
# This script sends a JSON POST request to the specified URL with the contents of the specified file in the body of the request,
curl -s -X POST -H "Content-Type: application/json" -d "@$2" "$1"
