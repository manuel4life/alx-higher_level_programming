#!/usr/bin/python3


def safe_print_list_integers(my_list=[], x=0):
    rint = 0

    for i in range(x):
        try:
            if type(my_list[i]) is int and rint != x:
                print('{:d}'.format(my_list[i]), end='')
                rint += 1
        except TypeError:
            continue

    print()

    return rint
