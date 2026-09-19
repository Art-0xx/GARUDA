"""
Query the Dockerized ChromaDB index.
Usage: python query.py "your question here"
"""

import sys
import chromadb
from chromadb.utils import embedding_functions

CHROMA_HOST     = "localhost"
CHROMA_PORT     = 8000
COLLECTION_NAME = "lotl_knowledge"
MODEL_NAME      = "all-MiniLM-L6-v2"

def main():
    if len(sys.argv) < 2:
        print('Usage: python query.py "your question"')
        return
    question = " ".join(sys.argv[1:])

    client = chromadb.HttpClient(host=CHROMA_HOST, port=CHROMA_PORT)
    embed_fn = embedding_functions.SentenceTransformerEmbeddingFunction(
        model_name=MODEL_NAME
    )
    coll = client.get_collection(
        name=COLLECTION_NAME,
        embedding_function=embed_fn
    )

    results = coll.query(query_texts=[question], n_results=5)

    print(f"\n🔍 Query: {question}\n")
    print("=" * 72)
    for i, (doc, meta, dist) in enumerate(zip(
        results["documents"][0],
        results["metadatas"][0],
        results["distances"][0]
    )):
        score = 1 - dist
        print(f"\n[{i+1}] Similarity: {score:.3f}  |  {meta['source']}")
        if meta.get("technique_id"):
            print(f"     Technique: {meta['technique_id']}")
        if meta.get("tags"):
            print(f"     Tags: {meta['tags']}")
        print("-" * 72)
        print(doc[:600] + ("..." if len(doc) > 600 else ""))
        print()

if __name__ == "__main__":
    main()