---
type: detection_rule
title: "NTDS Exfiltration Filename Patterns"
rule_id: 3a8da4e0-36c1-40d2-8b29-b3e890d5172a
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1003.003]
---

# NTDS Exfiltration Filename Patterns

## Description
Detects creation of files with specific name patterns seen used in various tools that export the NTDS.DIT for exfiltration.

## Log Source
```yaml
category: file_event
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  TargetFilename|endswith:
  - \All.cab
  - .ntds.cleartext
```

## MITRE ATT&CK
- T1003.003

## False Positives
- Unknown

## References
- https://github.com/rapid7/metasploit-framework/blob/eb6535009f5fdafa954525687f09294918b5398d/modules/post/windows/gather/ntds_grabber.rb
- https://github.com/rapid7/metasploit-framework/blob/eb6535009f5fdafa954525687f09294918b5398d/data/post/powershell/NTDSgrab.ps1
- https://github.com/SecureAuthCorp/impacket/blob/7d2991d78836b376452ca58b3d14daa61b67cb40/impacket/examples/secretsdump.py#L2405

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2022-03-11
- **Rule ID:** `3a8da4e0-36c1-40d2-8b29-b3e890d5172a`
- **Source file:** `windows/file/file_event/file_event_win_ntds_exfil_tools.yml`
