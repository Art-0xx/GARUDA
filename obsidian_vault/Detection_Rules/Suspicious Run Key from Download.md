---
type: detection_rule
title: "Suspicious Run Key from Download"
rule_id: 9c5037d1-c568-49b3-88c7-9846a5bdc2be
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1547.001]
---

# Suspicious Run Key from Download

## Description
Detects the suspicious RUN keys created by software located in Download or temporary Outlook/Internet Explorer directories

## Log Source
```yaml
category: registry_event
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Image|contains:
  - \AppData\Local\Packages\Microsoft.Outlook_
  - \AppData\Local\Microsoft\Olk\Attachments\
  - \Downloads\
  - \Temporary Internet Files\Content.Outlook\
  - \Local Settings\Temporary Internet Files\
  TargetObject|contains:
  - \Software\Microsoft\Windows\CurrentVersion\Run
  - \Software\WOW6432Node\Microsoft\Windows\CurrentVersion\Run
  - \Software\Microsoft\Windows\CurrentVersion\Policies\Explorer\Run
```

## MITRE ATT&CK
- T1547.001

## False Positives
- Software installers downloaded and used by users

## References
- https://app.any.run/tasks/c5bef5b7-f484-4c43-9cf3-d5c5c7839def/
- https://github.com/HackTricks-wiki/hacktricks/blob/e4c7b21b8f36c97c35b7c622732b38a189ce18f7/src/windows-hardening/windows-local-privilege-escalation/privilege-escalation-with-autorun-binaries.md

## Metadata
- **Author:** Florian Roth (Nextron Systems), Swachchhanda Shrawan Poude (Nextron Systems)
- **Date:** 2019-10-01
- **Rule ID:** `9c5037d1-c568-49b3-88c7-9846a5bdc2be`
- **Source file:** `windows/registry/registry_event/registry_event_susp_download_run_key.yml`
