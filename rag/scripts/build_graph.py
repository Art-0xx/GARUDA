"""
Scan the Obsidian vault, extract nodes (notes) and edges (wikilinks),
save to static/vault_graph.json for the UI.

Run once (or after vault changes):
    python build_graph.py
"""
import os
import re
import json
from collections import defaultdict
from pathlib import Path

VAULT = r"D:\GARUDA\obsidian_vault"
OUTPUT = r"D:\GARUDA\rag\scripts\static\vault_graph.json"

# Matches [[Target]] or [[Target|Label]]
WIKILINK_RE = re.compile(r"\[\[([^\]|]+)(?:\|[^\]]+)?\]\]")


def normalize_id(rel_path: str) -> str:
    p = rel_path.replace("\\", "/")
    if p.endswith(".md"):
        p = p[:-3]
    return p


def get_collection(rel_path: str) -> str:
    parts = rel_path.replace("\\", "/").split("/")
    return parts[0] if parts else "root"


def main():
    nodes = []
    by_full = {}                      # lowercase full path -> node id
    by_base = defaultdict(list)       # lowercase basename -> [node ids]
    all_files = []

    # ---- Pass 1: collect nodes ----
    for root, dirs, files in os.walk(VAULT):
        dirs[:] = [d for d in dirs if d != ".obsidian"]
        for f in files:
            if not f.endswith(".md"):
                continue
            full = os.path.join(root, f)
            rel = os.path.relpath(full, VAULT)
            nid = normalize_id(rel)
            label = f[:-3]
            coll = get_collection(rel)
            all_files.append((full, nid, label, coll))

    print(f"Found {len(all_files)} markdown files")

    for full, nid, label, coll in all_files:
        nodes.append({"id": nid, "label": label, "collection": coll})
        by_full[nid.lower()] = nid
        by_base[label.lower()].append(nid)

    # ---- Pass 2: extract wikilinks ----
    edge_count = 0
    edges = []
    for full, nid, label, coll in all_files:
        try:
            with open(full, encoding="utf-8") as f:
                content = f.read()
        except Exception:
            continue

        for m in WIKILINK_RE.finditer(content):
            target = m.group(1).strip()
            if not target:
                continue
            # strip #anchors
            target = target.split("#")[0].strip()
            if not target:
                continue

            t_norm = target.replace("\\", "/")
            t_norm = re.sub(r"^\.+/", "", t_norm)   # remove ../ prefix

            resolved = None
            # exact-path match
            if t_norm.lower() in by_full:
                resolved = by_full[t_norm.lower()]
            else:
                # basename match
                base = t_norm.split("/")[-1].lower()
                if base in by_base:
                    candidates = by_base[base]
                    # prefer exact-collection match
                    same = [c for c in candidates if get_collection(c) == coll]
                    resolved = (same or candidates)[0]

            if resolved and resolved != nid:
                edges.append({"source": nid, "target": resolved})
                edge_count += 1

    # ---- Dedupe ----
    seen = set()
    deduped = []
    for e in edges:
        key = tuple(sorted([e["source"], e["target"]]))
        if key not in seen:
            seen.add(key)
            deduped.append(e)

    print(f"Nodes: {len(nodes)}")
    print(f"Edges before dedupe: {edge_count}")
    print(f"Edges after dedupe: {len(deduped)}")

    os.makedirs(os.path.dirname(OUTPUT), exist_ok=True)
    with open(OUTPUT, "w", encoding="utf-8") as f:
        json.dump({"nodes": nodes, "edges": deduped}, f)
    print(f"Saved -> {OUTPUT}")


if __name__ == "__main__":
    main()