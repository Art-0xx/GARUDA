"""
GARUDA FastAPI server — serves API + UI.

Start:
    cd D:\\GARUDA
    .\\.venv\\Scripts\\Activate.ps1
    cd rag\\scripts
    uvicorn server:app --host 0.0.0.0 --port 8080
"""

import json
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent))

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import StreamingResponse, FileResponse
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel
import ollama as ollama_lib
import chromadb

import assistant

app = FastAPI(title="GARUDA")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

STATIC_DIR = Path(__file__).parent / "static"
GRAPH_FILE = STATIC_DIR / "vault_graph.json"
_graph_cache = None
STATIC_DIR.mkdir(exist_ok=True)


class Message(BaseModel):
    role: str
    content: str


class ChatRequest(BaseModel):
    messages: list[Message]


SUGGESTIONS = {
    "LOLBins": [
        "How do attackers use certutil?",
        "What can mshta.exe be abused for?",
        "How is rundll32 used in attacks?",
        "Explain regsvr32 as a LOLBin.",
    ],
    "GTFOBins": [
        "How do attackers abuse curl?",
        "Explain GTFOBins usage of tar.",
        "How is python3 abused for reverse shells?",
    ],
    "MITRE ATT&CK": [
        "Explain T1059.",
        "What is T1105 Ingress Tool Transfer?",
        "Describe T1218.",
    ],
    "Detection Rules": [
        "Sigma rule for suspicious rundll32 usage.",
        "How to detect certutil download?",
        "How to spot mshta execution?",
    ],
    "Campaigns": [
        "Show me a real-world attack chain using LOLBins.",
        "Walk me through a multi-step LOTL campaign.",
    ],
    "CIPHER": [
        "What is the CIPHER framework?",
        "How do I structure threat intelligence using CIPHER?",
    ],
}


@app.get("/health")
def health():
    status = {"ollama": "down", "chroma": "down", "model": assistant.LLM_MODEL}
    try:
        c = ollama_lib.Client(host="http://localhost:11434")
        c.list()
        status["ollama"] = "ok"
    except Exception as e:
        status["ollama_error"] = str(e)
    try:
        ch = chromadb.HttpClient(
            host=assistant.CHROMA_HOST, port=assistant.CHROMA_PORT
        )
        ch.heartbeat()
        status["chroma"] = "ok"
    except Exception as e:
        status["chroma_error"] = str(e)
    return status


@app.get("/suggestions")
def suggestions():
    return SUGGESTIONS


def sse(event_type: str, data) -> str:
    return f"data: {json.dumps({'type': event_type, 'data': data})}\n\n"


@app.post("/chat")
async def chat(req: ChatRequest):
    messages = [m.model_dump() for m in req.messages]
    if not messages:
        return {"error": "no messages"}

    last_user = next(
        (m for m in reversed(messages) if m["role"] == "user"), None
    )
    if last_user is None:
        return {"error": "no user message"}

    question = last_user["content"]
    history = [{"role": m["role"], "content": m["content"]} for m in messages[:-1]]

    def event_stream():
        for kind, payload in assistant.answer_stream(question, history=history):
            yield sse(kind, payload)

    return StreamingResponse(
        event_stream(),
        media_type="text/event-stream",
        headers={"Cache-Control": "no-cache", "X-Accel-Buffering": "no"},
    )

@app.get("/graph")
def graph():
    global _graph_cache
    if _graph_cache is None:
        if not GRAPH_FILE.exists():
            return {"nodes": [], "edges": [], "error": "graph not built. Run build_graph.py"}
        with open(GRAPH_FILE, encoding="utf-8") as f:
            _graph_cache = json.load(f)
    return _graph_cache

@app.get("/")
def index():
    return FileResponse(STATIC_DIR / "index.html")


app.mount("/static", StaticFiles(directory=STATIC_DIR), name="static")