#  GARUDA: Local Cybersecurity Assistant

![Python](https://img.shields.io/badge/Python-3.10%2B-blue)
![FastAPI](https://img.shields.io/badge/FastAPI-0.100%2B-009688)
![Ollama](https://img.shields.io/badge/Ollama-Local_LLM-black)
![ChromaDB](https://img.shields.io/badge/ChromaDB-Vector_DB-orange)
![License](https://img.shields.io/badge/License-MIT-green)

**GARUDA** is a 100% localized, privacy-first, domain-specific Retrieval-Augmented Generation (RAG) assistant for cybersecurity threat intelligence. 

Unlike cloud-based AI (like ChatGPT) that pose severe data-leakage risks for sensitive cyber data (CVEs, internal logs, MITRE ATT&CK), GARUDA runs entirely on your local hardware. It strictly grounds every answer in your own Obsidian vault of LOTL/LOLBins notes, ensuring zero hallucinations and total data privacy.

---

##  Table of Contents
1. [Key Features](#-key-features)
2. [The 7-Stage RAG Pipeline](#-the-7-stage-rag-pipeline)
3. [Hardware Scaling (1.5B vs 14B)](#-hardware-scaling)
4. [Tech Stack](#-tech-stack)
5. [Engineering Challenges Solved](#-engineering-challenges-solved)
6. [Getting Started](#-getting-started)
7. [Future Scope](#-future-scope)

---

##  Key Features
*   **100% Local & Private:** No data ever leaves your machine. Powered by Ollama.
*   **Multi-Turn Memory:** Uses a dedicated Rewriter LLM to resolve pronouns (e.g., *"What about detection for that?"* becomes *"certutil detection"*).
*   **Cross-Encoder Reranking:** Fetches 25 semantic chunks and filters them down to the absolute best 5 using a Cross-Encoder to ensure precision.
*   **Hallucination Mitigation:** Strictly strips old chat history during the generation phase to prevent the AI from mixing up past topics.
*   **Interactive UI:** Features a cyberpunk aesthetic, a 3D particle graph rendered via Canvas API, and real-time Server-Sent Events (SSE) streaming.
*   **Traceability:** Every answer includes clickable source chips (e.g., `LOLBins/OSBinaries`) so you can verify the intelligence instantly.

---

##  The 7-Stage RAG Pipeline

GARUDA doesn't just use basic vector search; it uses a custom-built, multi-stage pipeline:

1.  **Guardrails & Routing:** Regex whitelists and `difflib` fuzzy matching block off-topic queries and fix typos (e.g., `certuil` → `certutil`).
2.  **Query Rewriter:** A lightweight LLM (`llama3.1:8b`) analyzes the last 2 chat messages to resolve pronouns and topic switches into a standalone search query.
3.  **Candidate Retrieval:** ChromaDB performs a semantic search to fetch the top 25 candidates.
4.  **Cross-Encoder Reranking:** `cross-encoder/ms-marco-MiniLM-L-6-v2` scores the 25 chunks and keeps only the top 5. A `MIN_SCORE` floor rejects bad matches to prevent hallucinations.
5.  **Grounded Generation:** The 14B generator model (`qwen3:14b`) synthesizes the answer using **only** the top 5 chunks (old history is stripped here).
6.  **Post-Processing:** Removes `<think>` tags, enforces markdown formatting, and strips broken URLs.
7.  **SSE Streaming:** Delivers the response token-by-token to the frontend via FastAPI.

---

## Hardware Scaling

GARUDA is completely hardware-agnostic. You can swap models based on your GPU's VRAM by changing a single `.env` file, with zero code changes.

| Environment | Models Used | VRAM | Context Window | Latency |
| :--- | :--- | :--- | :--- | :--- |
| **Laptop (Edge)** | `qwen2.5:1.5b` (Generator)<br>`llama3.2:3b` (Rewriter) | < 4 GB | 2K tokens | ~5 seconds |
| **Workstation (Enterprise)** | `qwen3:14b` (Generator)<br>`llama3.1:8b` (Rewriter) | ~ 16 GB | 8K tokens | Sub-second |

---

## Tech Stack
*   **Frontend:** HTML5, Vanilla JavaScript, CSS3, Canvas API.
*   **Backend:** Python, FastAPI, Uvicorn.
*   **AI Orchestration:** Ollama.
*   **Vector Database:** ChromaDB.
*   **Embeddings:** `BAAI/bge-large-en-v1.5`.

---

## Engineering Challenges Solved

*   **The Ngrok SSE Bug:** When tunneling via Ngrok, the proxy injected `\r\n` characters, breaking the Server-Sent Events (SSE) stream and causing empty chat bubbles. We engineered a custom JavaScript `processSSE()` parser to normalize line breaks and added the `ngrok-skip-browser-warning` header.
*   **The Hallucination Loop:** The AI kept mixing up topics (e.g., answering about Mshta when asked about Certutil). We fixed this by removing `messages.extend(history)` from the generation phase, forcing the LLM to read *only* the retrieved context.
*   **UI Shift & Mobile Overlap:** We implemented a hybrid Flexbox/Overlay CSS architecture. On desktop, the chat gracefully expands to `1200px`. On mobile, the sidebar auto-closes into an overlay to prevent any layout breakage.

---

## Getting Started

### Prerequisites
*   Python 3.10+
*   [Ollama](https://ollama.com/) installed and running.
*   [ChromaDB](https://docs.trychroma.com/) running locally.

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/GARUDA.git
cd GARUDA/rag/scripts
```

### 2. Install Dependencies
```bash
python -m venv .venv
source .venv/bin/activate  # On Windows: .\.venv\Scripts\activate
pip install -r requirements.txt
```

### 3. Pull the LLMs
Choose your models based on your hardware:
```bash
# For high-compute workstations
ollama pull qwen3:14b
ollama pull llama3.1:8b

# OR for laptops
ollama pull qwen2.5:1.5b
ollama pull llama3.2:3b
```

### 4. Configure Environment Variables
Create a `.env` file in the `rag/scripts` folder:
```env
GARUDA_MODEL=qwen3:14b
GARUDA_REWRITER=llama3.1:8b
GARUDA_CONTEXT=8192
GARUDA_PREDICT=800
```

### 5. Run the Server
```bash
uvicorn server:app --host 0.0.0.0 --port 8080 --proxy-headers
```

### 6. Access the UI
Open your browser and navigate to: `http://localhost:8080`

---

## Future Scope
*   **Graph-RAG:** Integrating Neo4j to map relationships between Threat Actors, Tools, and Techniques for multi-hop reasoning.
*   **Structured RAG:** Adding a SQL database to query exact CVE scores and tabular MITRE data.
*   **Multimodal:** Allowing users to upload screenshots of log files for the AI to analyze via local Vision models (like LLaVA).

---

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.