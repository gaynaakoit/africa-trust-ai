from fastapi import UploadFile
from PIL import Image
import torch
from torchvision import transforms
from efficientnet_pytorch import EfficientNet
import tempfile
import cv2
import os

# -----------------------
# Charger le modèle depuis le fichier local
# -----------------------
# Assure-toi que le fichier efficientnet-b0-355c32eb.pth est dans ~/.cache/torch/hub/checkpoints/
local_model_path = os.path.expanduser("~/.cache/torch/hub/checkpoints/efficientnet-b0-355c32eb.pth")

model = EfficientNet.from_name('efficientnet-b0')  # créer le modèle vide
model.load_state_dict(torch.load(local_model_path))  # charger les poids locaux
model.eval()

transform = transforms.Compose([
    transforms.Resize((224,224)),
    transforms.ToTensor()
])

# -----------------------
# Fonctions existantes
# -----------------------
def analyze_image(img: Image.Image):
    img_t = transform(img).unsqueeze(0)
    with torch.no_grad():
        output = model(img_t)
        # prototype (remplace par ton modèle fine-tuned)
        prob = torch.sigmoid(torch.rand(1)).item()
        label = "fake" if prob > 0.5 else "real"
        return {
            "deepfake_probability": round(prob*100,2),
            "label": label
        }


async def detect_deepfake(file: UploadFile):
    ext = file.filename.split('.')[-1].lower()

    # -----------------------
    # VIDEO
    # -----------------------
    if ext in ['mp4','mov','avi','mkv']:
        temp_file = tempfile.NamedTemporaryFile(delete=False)
        temp_file.write(await file.read())
        temp_file.close()

        cap = cv2.VideoCapture(temp_file.name)
        frame_count = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
        sample_frames = [int(frame_count*i/5) for i in range(1,6)]
        probs = []

        for idx in sample_frames:
            cap.set(cv2.CAP_PROP_POS_FRAMES, idx)
            ret, frame = cap.read()
            if ret:
                img = Image.fromarray(cv2.cvtColor(frame, cv2.COLOR_BGR2RGB))
                res = analyze_image(img)
                probs.append(res["deepfake_probability"])

        cap.release()
        avg_prob = sum(probs)/len(probs)
        label = "fake" if avg_prob > 50 else "real"

        return {
            "deepfake_probability": round(avg_prob,2),
            "label": label
        }

    # -----------------------
    # IMAGE
    # -----------------------
    else:
        img = Image.open(file.file).convert("RGB")
        return analyze_image(img)