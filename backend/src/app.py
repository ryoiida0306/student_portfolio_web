from flask import Flask, request
from flask_cors import CORS
import matplotlib
matplotlib.use('Agg')
from generate import VAEModelHandler
from othello import Othello
from dotenv import load_dotenv
import os

load_dotenv()

cors_host = os.getenv('CORS_HOST')
cors_port = os.getenv('CORS_PORT')
cors_origin = "http://" + cors_host + ":" + cors_port

host = os.getenv('FLASK_RUN_HOST')
port = os.getenv('FLASK_RUN_PORT')


app = Flask(__name__)
cors = CORS(app, origins=cors_origin) 
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
    return model_handler.runtime_generate(data)



if __name__ == '__main__' :
    app.run(host=host, port=port, debug=True)

