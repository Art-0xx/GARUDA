"""
Ingest the Obsidian vault into ChromaDB with:
- 5 specialized collections (lolbins, techniques, malware, tools, tactics)
- Better embedding model (BAAI/bge-small-en-v1.5)
- Markdown-aware chunking
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
EMBED_MODEL     = "BAAI/bge-small-en-v1.5"
MIN_CHUNK       = 60
MAX_CHUNK       = 1200
# ================================

COLLECTION_ROUTES = [
    ("lolbins",    ["LOLBins/OSBinaries", "LOLBins/OtherMSBinaries",
                    "LOLBins/OSScripts", "LOLBins/OSLibraries",
                    "LOLBins/HonorableMentions"]),
    ("gtfobins",   ["GTFOBins"]),     
    ("detection_rules", ["Detection_Rules"]),   
    ("campaigns",       ["Campaigns"]),           
    ("techniques", ["MITRE_ATTACK/Techniques"]),
    ("malware",    ["MITRE_ATTACK/Malwares"]),
    ("tools",      ["MITRE_ATTACK/Tools"]),
    ("tactics",    ["MITRE_ATTACK/Tactics"]),
]

def collection_for(rel_path: Path):
    rel_str = str(rel_path).replace("\\", "/")
    for coll, prefixes in COLLECTION_ROUTES:
        for prefix in prefixes:
            if rel_str.startswith(prefix):
                return coll
    return None

def split_frontmatter(text: str):
    m = re.match(r"^---\s*\n(.*?)\n---\s*\n(.*)$", text, re.DOTALL)
    if not m:
        return {}, text
    try:
        fm = yaml.safe_load(m.group(1)) or {}
    except Exception:
        fm = {}
    return fm, m.group(2)

def chunk_by_headers(body: str):
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

    print(f"Loading embedding model: {EMBED_MODEL}")
    embed_fn = embedding_functions.SentenceTransformerEmbeddingFunction(
        model_name=EMBED_MODEL
    )

    client = chromadb.HttpClient(host=CHROMA_HOST, port=CHROMA_PORT)

    try:
        client.delete_collection("lotl_knowledge")
        print("Deleted legacy 'lotl_knowledge' collection.")
    except Exception:
        pass

    collections = {}
    for name, _ in COLLECTION_ROUTES:
        try:
            client.delete_collection(name)
        except Exception:
            pass
        collections[name] = client.create_collection(
            name=name,
            embedding_function=embed_fn,
        )
        print(f"  Created collection: {name}")

    buffers = {name: {"ids": [], "docs": [], "metas": []}
               for name, _ in COLLECTION_ROUTES}
    counts = {name: 0 for name, _ in COLLECTION_ROUTES}
    skipped = 0

    for fp in files:
        rel = fp.relative_to(VAULT_PATH)
        coll_name = collection_for(rel)
        if coll_name is None:
            skipped += 1
            continue

        try:
            text = fp.read_text(encoding="utf-8")
        except Exception as e:
            print(f"  skip {fp.name}: {e}")
            continue

        fm, body = split_frontmatter(text)
        chunks = chunk_by_headers(body)
        if not chunks:
            continue

        for i, chunk in enumerate(chunks):
            cid = f"{coll_name}::{rel}::{i}"
            buffers[coll_name]["ids"].append(cid)
            buffers[coll_name]["docs"].append(chunk)

            tags = fm.get("tags")
            tags_str = ",".join(str(t) for t in tags) if isinstance(tags, list) else str(tags or "")
            mitre = fm.get("mitre_data") or {}

            buffers[coll_name]["metas"].append({
                "source": str(rel),
                "filename": fp.stem,
                "title": str(fm.get("title") or fp.stem),
                "tags": tags_str,
                "technique_id": str(fm.get("technique_id") or mitre.get("id") or ""),
            })
            counts[coll_name] += 1

        for name, _ in COLLECTION_ROUTES:
            b = buffers[name]
            if len(b["ids"]) >= 300:
                collections[name].add(
                    ids=b["ids"], documents=b["docs"], metadatas=b["metas"]
                )
                buffers[name] = {"ids": [], "docs": [], "metas": []}

    for name, _ in COLLECTION_ROUTES:
        b = buffers[name]
        if b["ids"]:
            collections[name].add(
                ids=b["ids"], documents=b["docs"], metadatas=b["metas"]
            )

    print("\n✅ Ingestion complete.")
    for name, _ in COLLECTION_ROUTES:
        print(f"   {name}: {counts[name]} chunks")
    print(f"   Skipped (outside routing): {skipped} files")

if __name__ == "__main__":
    main()