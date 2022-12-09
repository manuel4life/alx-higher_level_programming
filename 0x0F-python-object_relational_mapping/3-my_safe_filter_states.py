#!/usr/bin/python3
''' A script that lists all states from the database'''
import MySQLdb
from sys import argv


if __name__ == "__main__":
    mysql_username = argv[1]
    mysql_password = argv[2]
    database_name = argv[3]
    state_name = argv[4]

    db = MySQLdb.connect(
            'localhost',
            mysql_username,
            mysql_password,
            database_name
            )
    cur = db.cursor()
    sql = "SELECT * FROM states WHERE name LIKE BINARY %s"
    cur.execute(sql, (state_name,))
    rows = cur.fetchall()
    for row in rows:
        print("{}".format(row))
