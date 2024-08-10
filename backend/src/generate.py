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
# from data import DataSet, get_data_loader
import os

from torch.utils.tensorboard import SummaryWriter  # Add this line
from torch.optim import Adam


class VAEModelHandler:

    def __init__(self):
        current_dir = os.path.dirname(os.path.realpath(__file__))
        load_epoch = 1500
        checkpoint_filename = f'model_{load_epoch}.pth'
        self.checkpoint_path = os.path.join(current_dir, checkpoint_filename)
        self.loading = [True, load_epoch]
        self.model = Model(28*28, 256, 2)
        # optimizer = Adam(model.parameters(), lr=0.005)
        self.model.eval()

    def runtime_generate(self, data) :
        load = self.loading[0]
        if load == True:
            self.model.load_state_dict(torch.load(self.checkpoint_path))

        mu = torch.tensor([data["mu1"], data["mu2"]])
        log_var = torch.tensor([-100, -100])

        with torch.no_grad() :
            outputs = self.model.generate(mu, log_var)
            # print(outputs.shape)
            output = outputs[0][0].reshape(28, 28)
            plt.imshow(output, cmap='gray')


        # 画像をメモリバッファに保存
        buf = io.BytesIO()
        plt.savefig(buf, format='png')
        buf.seek(0)
        plt.close()

        # 画像をレスポンスとして送信
        return send_file(buf, mimetype='image/png')


