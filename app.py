from flask import Flask, redirect,request,jsonify, url_for,Response,session
from werkzeug.utils import secure_filename
from flask_cors import CORS
from datetime import datetime
import pandas as pd
import os
app=Flask(__name__)
app.secret_key = 'your_secret_key'
CORS(app)

TAG = "==========>>>>"
@app.route("/", methods=['GET','POST'])
def index():
    if request.method=='POST':
        file1 = request.files['file']
        filename = 'file.csv'
        file1.save(filename)
        return jsonify('File Saved Successfully')
    else:
        data = {
            "Modules" : 1,
            "Subject" : "Data Structures and Algorithms",
        }
        print(data)
        return jsonify(data)

df=pd.read_csv('predicted.csv')
@app.route("/predicted", methods=['GET','POST'])
def index1(): 
    if request.method=='GET':
        data={
            'Dates':list(df['ds']),
            'Sales':list(df['sum'])
        }
        return jsonify(data)
    else:
        return jsonify("error")

if __name__=='__main__':
 app.run(debug = True)