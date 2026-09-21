---
type: detection_rule
title: "Suspicious Velociraptor Child Process"
rule_id: 4bc90587-e6ca-4b41-be0b-ed4d04e4ed0c
platform: windows
level: high
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1219]
---

# Suspicious Velociraptor Child Process

## Description
Detects the suspicious use of the Velociraptor DFIR tool to execute other tools or download additional payloads, as seen in a campaign where it was abused for remote access and to stage further attacks.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection_parent and 1 of selection_child_*
selection_child_msiexec:
  CommandLine|contains|all:
  - msiexec
  - /i
  - http
selection_child_powershell:
  CommandLine|contains:
  - 'Invoke-WebRequest '
  - 'IWR '
  - .DownloadFile
  - .DownloadString
  Image|endswith:
  - \powershell.exe
  - \powershell_ise.exe
  - \pwsh.exe
selection_child_vscode_tunnel:
  CommandLine|contains|all:
  - code.exe
  - tunnel
  - --accept-server-license-terms
selection_parent:
  ParentImage|endswith: \Velociraptor.exe
```

## MITRE ATT&CK
- T1219

## False Positives
- Legitimate administrators or incident responders might use Velociraptor to execute scripts or tools. However, the combination of Velociraptor spawning these specific processes with these command lines is suspicious. Tuning may be required to exclude known administrative actions or specific scripts.

## References
- https://news.sophos.com/en-us/2025/08/26/velociraptor-incident-response-tool-abused-for-remote-access/

## Metadata
- **Author:** Swachchhanda Shrawan Poudel (Nextron Systems)
- **Date:** 2025-08-29
- **Rule ID:** `4bc90587-e6ca-4b41-be0b-ed4d04e4ed0c`
- **Source file:** `windows/process_creation/proc_creation_win_susp_velociraptor_child_process.yml`
