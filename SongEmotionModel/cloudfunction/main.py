import torch

import torchvision
import torchvision.transforms as transforms
import numpy as np
# from numba import decorators
import librosa

from PIL import Image
import matplotlib.pyplot as plt

# set up model
model_conv = torchvision.models.resnet50(pretrained=True)
num_ftrs = model_conv.fc.in_features
model_conv.fc = torch.load('./song_mfcc_model_fc.pth', map_location=torch.device('cpu'))
model_conv = model_conv.to('cpu')  # force cpu
model_conv.eval()

# image loading pipeline
transform = transforms.Compose([
        transforms.Resize(224),
        transforms.CenterCrop(224),
        transforms.ToTensor(),
        transforms.Normalize([0.485, 0.456, 0.406], [0.229, 0.224, 0.225])
    ]
)

def fig2data ( fig ):
    """
    @brief Convert a Matplotlib figure to a 4D numpy array with RGBA channels and return it
    @param fig a matplotlib figure
    @return a numpy 3D array of RGBA values
    """
    # draw the renderer
    fig.canvas.draw ( )
 
    # Get the RGBA buffer from the figure
    w,h = fig.canvas.get_width_height()
    buf = np.fromstring ( fig.canvas.tostring_argb(), dtype=np.uint8 )
    buf.shape = ( w, h,4 )
 
    # canvas.tostring_argb give pixmap in ARGB mode. Roll the ALPHA channel to have it in RGBA mode
    buf = np.roll ( buf, 3, axis = 2 )
    return buf

def fig2img ( fig ):
    """
    @brief Convert a Matplotlib figure to a PIL Image in RGBA format and return it
    @param fig a matplotlib figure
    @return a Python Imaging Library ( PIL ) image
    """
    # put the figure pixmap into a numpy array
    buf = fig2data ( fig )
    w, h, d = buf.shape
    return Image.frombytes( "RGBA", ( w ,h ), buf.tostring( ) )

cmap = plt.get_cmap('inferno')
def song_to_image(song):
    y, sr = librosa.load(song, mono=True, duration=5)
    plt.specgram(y, NFFT=2048, Fs=2, Fc=0, noverlap=128, cmap=cmap, sides='default', mode='default', scale='dB')
    plt.axis('off')
    image = fig2img(plt.gcf())
    return image_loader(image)

def image_loader(image_name):
    image = image_name.convert('RGB')
    image = transform(image)
    return image.unsqueeze(0)

def predict_song(request):

    # Set CORS headers for the preflight request
    if request.method == 'OPTIONS':
        # Allows GET/POST requests from any origin with the Content-Type
        # header and caches preflight response for an 3600s
        headers = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Max-Age': '3600'
        }

        return ('', 204, headers)

    # Set CORS headers for the main request
    headers = {
        'Access-Control-Allow-Origin': '*'
    }

    if 'file' not in request.files:
        return {'success': False, 'message': 'Song not found'}, 400, headers
    image = song_to_image(request.files['file'])
    out = model_conv(image)
    pred = out.tolist()[0]

    # process predictions
    labels = [
        "solemnity", 
        "tenderness", 
        "nostalgia", 
        "calmness", 
        "power", 
        "joyful activation", 
        "tension", 
        "sadness"
    ]

    result = dict(zip(labels, pred))
    return {'success': True, 'results': result}, 200, headers
