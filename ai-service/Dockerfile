# ---------- Base ----------
FROM python:3.10-slim

WORKDIR /app

# Installer dépendances système utiles
RUN apt-get update && apt-get install -y \
    build-essential \
    netcat-openbsd \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Copier requirements
COPY requirements.txt .

# Installer dépendances Python
RUN pip install --no-cache-dir -r requirements.txt

# Copier code
COPY . .

# Exposer port FastAPI
EXPOSE 8000

# Commande par défaut
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]