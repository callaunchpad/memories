import torch
import torch.nn as nn
import torch.nn.functional as F
import torch.optim as optim
from torch.optim import lr_scheduler
import matplotlib.pyplot as plt
import librosa
import torchvision
from torchvision import datasets, models, transforms
import pathlib
from pathlib import Path
import numpy as np
from PIL import Image

from soundnet import SoundNet
import os


# check if you are on cpu or gpu
device = torch.device("cuda:0" if torch.cuda.is_available() else "cpu")
print(device)

# Data augmentation and normalization for training

data_augmentation = transforms.Compose([
        transforms.Resize(256),
        transforms.CenterCrop(224),
        transforms.ToTensor(),
        transforms.Normalize([0.485, 0.456, 0.406], [0.229, 0.224, 0.225])
])

input_image_path = Path.cwd()

input_image = datasets.ImageFolder(input_image_path, data_augmentation)

image_model = models.resnet18(pretrained=True)
soundnet_model = SoundNet()
soundnet_model.load_state_dict(torch.load("soundnet8_final.pth"))
print(soundnet_model)

num_features = image_model.fc.in_features

class Identity(nn.Module):
    def __init__(self):
        super(Identity, self).__init__()
        
    def forward(self, x):
        return x

# image_model.fc = Identity()
# image_model.eval()
image_model.to(device)
input = input_image[0][0].unsqueeze(0)
input.to(device)

output = image_model(input)[0]
# print(output)
# print(output.size())


