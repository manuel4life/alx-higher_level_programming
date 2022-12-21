#!/usr/bin/python3

"""find_peak function."""


def find_peak(list_of_integers):
    # Edge case: if the list is empty, return None
    if not list_of_integers:
        return None

    # Edge case: if the list has length 1, return the only element
    if len(list_of_integers) == 1:
        return list_of_integers[0]

    # Find the middle index of the list
    mid = len(list_of_integers) // 2

    # If the middle element is greater than its neighbors, it is a peak
    if (mid == 0 or list_of_integers[mid-1] <= list_of_integers[mid]) and (mid == len(list_of_integers)-1 or list_of_integers[mid+1] <= list_of_integers[mid]):
        return list_of_integers[mid]

    # If the middle element is not a peak and is greater than its left neighbor,
    # search for a peak in the right half of the list
    elif mid > 0 and list_of_integers[mid-1] > list_of_integers[mid]:
        return find_peak(list_of_integers[:mid])

    # If the middle element is not a peak and is less than its left neighbor,
    # search for a peak in the left half of the list
    else:
        return find_peak(list_of_integers[mid+1:])
