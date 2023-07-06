from flask import Flask, request, render_template,send_file,make_response,url_for, Response, redirect, request,send_from_directory,send_file,after_this_request
import pandas as pd
import os
import re
import glob
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from email import encoders
from email.mime.base import MIMEBase
import xlrd
import zipfile
from multiprocessing import *
import shutil
import uuid
from werkzeug.utils import secure_filename

UPLOAD_FOLDER = './'

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER


@app.route('/', methods=['GET', 'POST'])
def main():
    if request.method == "GET":
        return render_template('index.html')
   
    # If a form is submitted
    if request.method ==  "POST":
       
        zip_file=request.files['zip_']
        unique_filename = str(uuid.uuid4()) + '.zip'
        zip_file.save(os.path.join('./', unique_filename))
       
        day, result = 12, 24
        return render_template('app1.html', filename = zip_file.filename)
   
@app.route('/download/<filename>', methods=['GET', 'POST'])
def download(filename):
    print(filename)
    print('hello') 
    return send_from_directory('./', filename, as_attachment=True)



@app.route('/upload1', methods=['GET', 'POST'])
def upload1():
    if request.method == "GET":
        return render_template('app1.html')

    # If a form is submitted
    if request.method == "POST":
        file = request.files['file_']
        # Generate a unique filename using UUID
        unique_filename = str(uuid.uuid4()) + '-' + secure_filename(file.filename)
        file.save(os.path.join('./', unique_filename))

        day, result = 12, 24
        return render_template('finalapp.html', filename=unique_filename)


@app.route('/download1/<filename>', methods=['GET', 'POST'])
def download1(filename):
    print(filename)
    print('app2') 
    return send_from_directory('./', filename, as_attachment=True)
    

if __name__ == '__main__':
    app.run(debug = True, port=5353)