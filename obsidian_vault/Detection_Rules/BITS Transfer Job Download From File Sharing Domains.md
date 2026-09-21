---
type: detection_rule
title: "BITS Transfer Job Download From File Sharing Domains"
rule_id: d635249d-86b5-4dad-a8c7-d7272b788586
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1197]
---

# BITS Transfer Job Download From File Sharing Domains

## Description
Detects BITS transfer job downloading files from a file sharing domain.

## Log Source
```yaml
product: windows
service: bits-client
```

## Detection Logic
```yaml
condition: selection
selection:
  EventID: 16403
  RemoteName|contains:
  - .githubusercontent.com
  - 0x0.st
  - anonfiles.com
  - bashupload.com
  - cdn.discordapp.com
  - chunk.io
  - ddns.net
  - dl.dropboxusercontent.com
  - ghostbin.co
  - github.com
  - glitch.me
  - gofile.io
  - hastebin.com
  - mediafire.com
  - mega.nz
  - onrender.com
  - pages.dev
  - paste.ee
  - pastebin.com
  - pastebin.pl
  - pastetext.net
  - pixeldrain.com
  - privatlab.com
  - privatlab.net
  - send.exploit.in
  - sendspace.com
  - storage.googleapis.com
  - storjshare.io
  - supabase.co
  - temp.sh
  - transfer.sh
  - trycloudflare.com
  - ufile.io
  - w3spaces.com
  - workers.dev
  - x0.at
```

## MITRE ATT&CK
- T1197

## False Positives
- Unknown

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1197/T1197.md
- https://twitter.com/malmoeb/status/1535142803075960832
- https://symantec-enterprise-blogs.security.com/blogs/threat-intelligence/ransomware-hive-conti-avoslocker
- https://www.microsoft.com/en-us/security/blog/2024/01/17/new-ttps-observed-in-mint-sandstorm-campaign-targeting-high-profile-individuals-at-universities-and-research-orgs/

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2022-06-28
- **Rule ID:** `d635249d-86b5-4dad-a8c7-d7272b788586`
- **Source file:** `windows/builtin/bits_client/win_bits_client_new_transfer_via_file_sharing_domains.yml`
