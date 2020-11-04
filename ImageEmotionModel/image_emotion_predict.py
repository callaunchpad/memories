import torch

import torchvision
import torchvision.transforms as transforms

from PIL import Image

# set up model
model_conv = torchvision.models.resnet50(pretrained=True)
num_ftrs = model_conv.fc.in_features
model_conv.fc = torch.load('./test_model_resnet.pth')
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
    image = Image.open(image_name)
    image = transform(image)
    return image.unsqueeze(0)

def predict(request):
    if 'file' not in request.files:
        return {'success': False, 'message': 'Image not found'}, 400
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
    return {'success': True, 'results': result}, 200
