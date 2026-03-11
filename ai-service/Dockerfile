# ---------- Base ----------
FROM python:3.10-slim

WORKDIR /app

# Installer dépendances système utiles
RUN apt-get update && apt-get install -y \
    build-essential \
    netcat-openbsd \
    curl \
    libgl1 \
    && rm -rf /var/lib/apt/lists/*

# Copier requirements
COPY requirements.txt .

# Installer dépendances Python
RUN pip install --upgrade pip
RUN pip install --no-cache-dir -r requirements.txt

ENV TORCH_HOME=/root/.cache/torch

# dossier modèles
RUN mkdir -p /root/.cache/torch/hub/checkpoints

# télécharger modèle
RUN curl -L https://github.com/lukemelas/EfficientNet-PyTorch/releases/download/1.0/efficientnet-b0-355c32eb.pth \
    -o /root/.cache/torch/hub/checkpoints/efficientnet-b0-355c32eb.pth

# Copier code
COPY . .

# Exposer port FastAPI
EXPOSE 8000

# Commande par défaut
CMD ["python", "-m", "uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]