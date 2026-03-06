import random

async def detect_liveness(file):

    score = random.uniform(0,1)

    if score > 0.5:
        status = "live"
    else:
        status = "spoof"

    return {
        "status": status,
        "confidence": score
    }