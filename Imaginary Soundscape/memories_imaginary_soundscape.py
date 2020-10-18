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

import json

from soundnet import SoundNet
import os


# check if you are on cpu or gpu
device = torch.device("cuda:0" if torch.cuda.is_available() else "cpu")
print(device)

# === Image model ===
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
output = output.detach().numpy()
print(output)
print(output.size)

# === Sound model ===

soundnet_model = SoundNet()
soundnet_model.load_state_dict(torch.load("soundnet8_final.pth"))

sound_dataset_path = Path.cwd().joinpath('data/sound_samples')

#practice sound sample input
sample_loaded, rate = librosa.load(sound_dataset_path.joinpath('9447523993_9_9_3.mp3'))

sample_loaded = np.reshape(sample_loaded, (1, 1, sample_loaded.shape[0], 1))

#convert to tensor
sample_loaded = torch.tensor(sample_loaded)
sample_loaded.to(device)
pred = soundnet_model(torch.tensor(sample_loaded))

pred = pred[0].detach().numpy()
pred = pred[:,0][:,0]
print(pred)
print(pred.size)

# take the l2 distance of the image array and sort by how close they are
# take the first three (closest)


# Create JSON file with JSON object of sound_samples
# key is the file path and the value is the 1000 length array
sound_samples = {}

for filename in os.listdir(sound_dataset_path):
    
    sample_loaded, rate = librosa.load(sound_dataset_path.joinpath(filename))
    if len(sample_loaded) > 230000:
        sample_loaded = np.reshape(sample_loaded, (1, 1, sample_loaded.shape[0], 1))
        #convert to tensor
        sample_loaded = torch.tensor(sample_loaded)
        sample_loaded.to(device)
        pred = soundnet_model(torch.tensor(sample_loaded))
        pred = pred[0].detach().numpy()
        pred = pred[:,0][:,0]


        #store 1000 length array as value in dictionary
        sound_samples[filename] = pred.tolist()

with open('sound_samples.json', 'w') as outfile:
    json.dump(sound_samples, outfile, ensure_ascii=False, indent=4, sort_keys=True, separators=(',', ': '))