#!/bin/bash
# This script takes in a URL and sends a POST request to that URL with variables.
curl -sd "email=test@gmail.com&subject=I will always be here for PLD" "$1"
