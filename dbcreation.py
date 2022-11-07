import sqlite3
conn = sqlite3.connect('accounts.db')
cur = conn.cursor()
cur.execute("""CREATE TABLE IF NOT EXISTS users(
username TEXT,
password INTEGER)""")



conn.commit()
