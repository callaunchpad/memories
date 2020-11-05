import torch

import torchvision
import torchvision.transforms as transforms

from PIL import Image

# set up model
model_conv = torchvision.models.resnet50(pretrained=True)
num_ftrs = model_conv.fc.in_features
model_conv.fc = torch.load('./test_model_resnet.pth', map_location=torch.device('cpu'))
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

def image_loader(image_name):
    image = Image.open(image_name).convert('RGB')
    image = transform(image)
    return image.unsqueeze(0)

def predict(request):

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
        return {'success': False, 'message': 'Image not found'}, 400, headers
    image = image_loader(request.files['file'])
    out = model_conv(image)
    pred = out.tolist()[0]

    # process predictions
    labels = [
        'amusement',
        'anger',
        'awe',
        'contentment',
        'disgust',
        'excitement',
        'fear',
        'sadness'
    ]

    result = dict(zip(labels, pred))
    return {'success': True, 'results': result}, 200, headers
