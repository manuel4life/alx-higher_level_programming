#!/usr/bin/python3
'''
A script to get X-Request-Id in the header of a url
and how can i access it in code from the urllib package
'''

import requests
import sys


def get_x_request_id():
    '''
    To get X-request-Id of a given url
    '''
    url = sys.argv[1]

    response = requests.get(url)
    x_request_id = response.headers.get('X-request-Id')
    print(x_request_id)


if __name__ == "__main__":
    get_x_request_id()
