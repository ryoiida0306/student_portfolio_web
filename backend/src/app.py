from datetime import datetime
import logging
from flask import Flask, request, jsonify
from flask import send_file
from flask_cors import CORS
import io
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
import torch
import torch.nn as nn
import numpy as np
from model import Model
from generate import VAEModelHandler
from othello import Othello
# from data import DataSet, get_data_loader
import os


from torch.utils.tensorboard import SummaryWriter  # Add this line
from torch.optim import Adam


app = Flask(__name__)
cors = CORS(app, origins='http://localhost:3000') 
model_handler = None
othello_board = None

@app.route('/othello', methods=['GET'])
def othello_init():
    global othello_board
    othello_board = Othello()
    print('Othello Board Initialized')
    return 'Othello Board Initialized'

@app.route('/othello', methods=['POST'])
def othello_play():
    global othello_board
    if othello_board is None:
        print('Othello Board not initialized')
        return 'Othello Board not initialized'
    data = request.get_json()
    # print(data)
    return othello_board.get_next_board(data)



@app.route('/vae', methods=['GET'])
def generate_init():
    global model_handler
    model_handler = VAEModelHandler()
    return 'Model Loaded'

@app.route('/vae', methods=['POST'])
def generate():
    global model_handler
    if model_handler is None:
        return 'Model not loaded'
    data = request.get_json()
    # print(data)
    return model_handler.runtime_generate(data)



if __name__ == '__main__' :
    app.run(host='localhost', port=8080, debug=True)
    

