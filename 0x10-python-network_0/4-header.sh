#!/bin/bash
# This script takes in a URL and sends a GET request to that URL with a header.
curl -sH "X-School-User-Id: 98" "$1"
