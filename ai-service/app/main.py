from fastapi import FastAPI, UploadFile, File
from app.deepfake import detect_deepfake
from app.liveness import detect_liveness

app = FastAPI(title="Africa Trust AI Service")

@app.get("/")
def health():
    return {"status": "AI service running"}

@app.post("/detect/deepfake")
async def deepfake(file: UploadFile = File(...)):
    result = await detect_deepfake(file)
    return result

@app.post("/detect/liveness")
async def liveness(file: UploadFile = File(...)):
    result = await detect_liveness(file)
    return result