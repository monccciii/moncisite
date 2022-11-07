from flask import Flask, render_template
import sqlite3
from dbcreation import conn, cur
from - import username, password as createuser, createpass
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')
 

def createacc():
	with conn:
		query = "INSERT INTO users (username, password) VALUES (?, ?)" 
		cur.execute(query, (createuser, createpass))
def login():
	isloggedin = False
	