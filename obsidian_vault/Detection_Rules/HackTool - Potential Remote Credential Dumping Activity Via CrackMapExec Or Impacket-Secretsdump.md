---
type: detection_rule
title: "HackTool - Potential Remote Credential Dumping Activity Via CrackMapExec Or Impacket-Secretsdump"
rule_id: 6e2a900a-ced9-4e4a-a9c2-13e706f9518a
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1003]
---

# HackTool - Potential Remote Credential Dumping Activity Via CrackMapExec Or Impacket-Secretsdump

## Description
Detects default filenames output from the execution of CrackMapExec and Impacket-secretsdump against an endpoint.

## Log Source
```yaml
category: file_event
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Image|endswith: \svchost.exe
  TargetFilename|re: \\Windows\\System32\\[a-zA-Z0-9]{8}\.tmp$
```

## MITRE ATT&CK
- T1003

## False Positives
- Unknown

## References
- https://github.com/Porchetta-Industries/CrackMapExec
- https://github.com/fortra/impacket/blob/ff8c200fd040b04d3b5ff05449646737f836235d/examples/secretsdump.py

## Metadata
- **Author:** SecurityAura
- **Date:** 2022-11-16
- **Rule ID:** `6e2a900a-ced9-4e4a-a9c2-13e706f9518a`
- **Source file:** `windows/file/file_event/file_event_win_hktl_remote_cred_dump.yml`
