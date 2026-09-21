---
type: detection_rule
title: "Suspicious NTLM Authentication on the Printer Spooler Service"
rule_id: bb76d96b-821c-47cf-944b-7ce377864492
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1212]
---

# Suspicious NTLM Authentication on the Printer Spooler Service

## Description
Detects a privilege elevation attempt by coercing NTLM authentication on the Printer Spooler service

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
  CommandLine|contains:
  - spoolss
  - srvsvc
  - /print/pipe/
  CommandLine|contains|all:
  - C:\windows\system32\davclnt.dll,DavSetCookie
  - http
selection_img:
- Image|endswith: \rundll32.exe
- OriginalFileName: RUNDLL32.EXE
```

## MITRE ATT&CK
- T1212

## False Positives
- Unknown

## References
- https://twitter.com/med0x2e/status/1520402518685200384
- https://github.com/elastic/detection-rules/blob/dd224fb3f81d0b4bf8593c5f02a029d647ba2b2d/rules/windows/credential_access_relay_ntlm_auth_via_http_spoolss.toml

## Metadata
- **Author:** Elastic (idea), Tobias Michalski (Nextron Systems)
- **Date:** 2022-05-04
- **Rule ID:** `bb76d96b-821c-47cf-944b-7ce377864492`
- **Source file:** `windows/process_creation/proc_creation_win_rundll32_ntlmrelay.yml`
