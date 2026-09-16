"""
Ingest an Obsidian vault into a Dockerized ChromaDB instance.
Reads all .md files, chunks by markdown headers, embeds each chunk, stores it.
"""

import re
import yaml
from pathlib import Path
import chromadb
from chromadb.utils import embedding_functions

# ============ CONFIG ============
VAULT_PATH      = Path(r"D:\GARUDA\obsidian_vault")
CHROMA_HOST     = "localhost"
CHROMA_PORT     = 8000
COLLECTION_NAME = "lotl_knowledge"
MODEL_NAME      = "all-MiniLM-L6-v2"
MIN_CHUNK       = 100     # skip chunks shorter than this (chars)
MAX_CHUNK       = 1500    # split chunks longer than this
# ================================

def split_frontmatter(text: str):
    """Return (frontmatter_dict, body)."""
    m = re.match(r"^---\s*\n(.*?)\n---\s*\n(.*)$", text, re.DOTALL)
    if not m:
        return {}, text
    try:
        fm = yaml.safe_load(m.group(1)) or {}
    except Exception:
        fm = {}
    return fm, m.group(2)

def chunk_by_headers(body: str):
    """Split markdown body into chunks at '# ' headers."""
    parts = re.split(r"\n(?=#{1,6}\s)", body)
    chunks = []
    for part in parts:
        part = part.strip()
        if len(part) < MIN_CHUNK:
            continue
        if len(part) > MAX_CHUNK:
            for i in range(0, len(part), MAX_CHUNK):
                sub = part[i:i+MAX_CHUNK].strip()
                if len(sub) >= MIN_CHUNK:
                    chunks.append(sub)
        else:
            chunks.append(part)
    return chunks

def main():
    print(f"Scanning vault: {VAULT_PATH}")
    files = list(VAULT_PATH.rglob("*.md"))
    print(f"Found {len(files)} markdown files.")

    print(f"Connecting to ChromaDB at http://{CHROMA_HOST}:{CHROMA_PORT}")
    client = chromadb.HttpClient(host=CHROMA_HOST, port=CHROMA_PORT)

    # Get or recreate the collection
    try:
        client.delete_collection(COLLECTION_NAME)
        print(f"Deleted old collection '{COLLECTION_NAME}'.")
    except Exception:
        pass

    embed_fn = embedding_functions.SentenceTransformerEmbeddingFunction(
        model_name=MODEL_NAME
    )
    coll = client.create_collection(
        name=COLLECTION_NAME,
        embedding_function=embed_fn
    )

    ids, docs, metas = [], [], []
    counter = 0

    for fp in files:
        try:
            text = fp.read_text(encoding="utf-8")
        except Exception as e:
            print(f"  skip {fp.name}: {e}")
            continue

        fm, body = split_frontmatter(text)
        rel = fp.relative_to(VAULT_PATH)
        chunks = chunk_by_headers(body)

        for i, chunk in enumerate(chunks):
            counter += 1
            ids.append(f"{rel}::{i}")
            docs.append(chunk)

            tags = fm.get("tags")
            if isinstance(tags, list):
                tags_str = ",".join(str(t) for t in tags)
            else:
                tags_str = str(tags or "")

            mitre = fm.get("mitre_data") or {}
            metas.append({
                "source": str(rel),
                "title": str(fm.get("title") or fp.stem),
                "tags": tags_str,
                "type": str(fm.get("type") or ""),
                "technique_id": str(fm.get("technique_id") or mitre.get("id") or ""),
            })

        if len(ids) >= 500:
            coll.add(ids=ids, documents=docs, metadatas=metas)
            print(f"  ... indexed {counter} chunks so far")
            ids, docs, metas = [], [], []

    if ids:
        coll.add(ids=ids, documents=docs, metadatas=metas)

    print(f"✅ Indexed {counter} chunks into '{COLLECTION_NAME}'.")

if __name__ == "__main__":
    main()