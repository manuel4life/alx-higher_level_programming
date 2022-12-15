#!/bin/bash
# This script takes in a URL as its first arugments and displays the size of the body
curl -s "$1" | wc -c
