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
import os


# Data augmentation and normalization for training

data_augmentation = transforms.Compose([
        transforms.Resize(256),
        transforms.CenterCrop(224),
        transforms.ToTensor(),
        transforms.Normalize([0.485, 0.456, 0.406], [0.229, 0.224, 0.225])
])

input_image_path = Path.cwd()

input_image = datasets.ImageFolder(input_image_path, data_augmentation)