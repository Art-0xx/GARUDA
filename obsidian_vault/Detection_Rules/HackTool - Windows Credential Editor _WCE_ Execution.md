---
type: detection_rule
title: "HackTool - Windows Credential Editor (WCE) Execution"
rule_id: 7aa7009a-28b9-4344-8c1f-159489a390df
platform: windows
level: critical
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1003.001]
---

# HackTool - Windows Credential Editor (WCE) Execution

## Description
Detects the use of Windows Credential Editor (WCE), a popular post-exploitation tool used to extract plaintext passwords, hash, PIN code and Kerberos tickets from memory.
It is often used by threat actors for credential dumping and lateral movement within compromised networks.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: 1 of selection_*
selection_hash:
  Hashes|contains:
  - IMPHASH=136F0A8572C058A96436C82E541E4C41
  - IMPHASH=589657C64DDE88533186C39F82FA1F50
  - IMPHASH=6BFE09EFCB4FFDE061EBDBAFC4DB84CF
  - IMPHASH=7D490037BF450877E6D0287BDCFF8D2E
  - IMPHASH=8AB93B061287C79F3088C5BC7E7D97ED
  - IMPHASH=A53A02B997935FD8EEDCB5F7ABAB9B9F
  - IMPHASH=BA434A7A729EEC20E136CA4C32D6C740
  - IMPHASH=BD1D1547DA13C0FCB6C15E86217D5EB8
  - IMPHASH=E96A73C7BF33A464C510EDE582318BF2
selection_img:
  Image|endswith:
  - \WCE.exe
  - \WCE64.exe
```

## MITRE ATT&CK
- T1003.001

## False Positives
- Unknown

## References
- https://www.ampliasecurity.com/research/windows-credentials-editor/

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2019-12-31
- **Rule ID:** `7aa7009a-28b9-4344-8c1f-159489a390df`
- **Source file:** `windows/process_creation/proc_creation_win_hktl_wce.yml`
