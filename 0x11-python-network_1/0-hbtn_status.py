#!/usr/bin/python3
"""
A script that fetches https://alx-intranet.hbtn.io/status
"""

import urllib.request


def get_status():

    with urllib.request.urlopen('https://alx-intranet.hbtn.io/status') as url:
        return url.read()


if __name__ == "__main__":
    # Get the status and print the body of the response
    status = get_status()
    print("Body response:")
    print("\f- type:", type(status))
    print("\f- content:", status)
    print("\f- utf8 content:", status.decode('utf-8'))
