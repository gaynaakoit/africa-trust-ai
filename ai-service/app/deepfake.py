import random

async def detect_deepfake(file):

    # Simulation IA (prototype hackathon)
    score = random.uniform(0,1)

    if score > 0.5:
        verdict = "fake"
    else:
        verdict = "real"

    return {
        "verdict": verdict,
        "confidence": score
    }