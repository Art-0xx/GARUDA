---
type: detection_rule
title: "HackTool - CreateMiniDump Execution"
rule_id: 36d88494-1d43-4dc0-b3fa-35c8fea0ca9d
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1003.001]
---

# HackTool - CreateMiniDump Execution

## Description
Detects the use of CreateMiniDump hack tool used to dump the LSASS process memory for credential extraction on the attacker's machine

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
- Image|endswith: \CreateMiniDump.exe
- Hashes|contains: IMPHASH=4a07f944a83e8a7c2525efa35dd30e2f
```

## MITRE ATT&CK
- T1003.001

## False Positives
- Unknown

## References
- https://ired.team/offensive-security/credential-access-and-credential-dumping/dumping-lsass-passwords-without-mimikatz-minidumpwritedump-av-signature-bypass

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2019-12-22
- **Rule ID:** `36d88494-1d43-4dc0-b3fa-35c8fea0ca9d`
- **Source file:** `windows/process_creation/proc_creation_win_hktl_createminidump.yml`
