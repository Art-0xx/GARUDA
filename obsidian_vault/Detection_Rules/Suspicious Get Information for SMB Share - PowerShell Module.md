---
type: detection_rule
title: "Suspicious Get Information for SMB Share - PowerShell Module"
rule_id: 6942bd25-5970-40ab-af49-944247103358
platform: windows
level: low
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1069.001]
---

# Suspicious Get Information for SMB Share - PowerShell Module

## Description
Adversaries may look for folders and drives shared on remote systems as a means of identifying sources of information to gather as a precursor for Collection and
to identify potential systems of interest for Lateral Movement.
Networks often contain shared network drives and folders that enable users to access file directories on various systems across a network.

## Log Source
```yaml
category: ps_module
definition: 0ad03ef1-f21b-4a79-8ce8-e6900c54b65b
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
- Payload|contains: get-smbshare
- ContextInfo|contains: get-smbshare
```

## MITRE ATT&CK
- T1069.001

## False Positives
- Administrator script

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1069.002/T1069.002.md

## Metadata
- **Author:** frack113
- **Date:** 2021-12-15
- **Rule ID:** `6942bd25-5970-40ab-af49-944247103358`
- **Source file:** `windows/powershell/powershell_module/posh_pm_susp_smb_share_reco.yml`
