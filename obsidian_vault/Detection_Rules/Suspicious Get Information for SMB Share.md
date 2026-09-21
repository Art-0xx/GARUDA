---
type: detection_rule
title: "Suspicious Get Information for SMB Share"
rule_id: 95f0643a-ed40-467c-806b-aac9542ec5ab
platform: windows
level: low
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1069.001]
---

# Suspicious Get Information for SMB Share

## Description
Adversaries may look for folders and drives shared on remote systems as a means of identifying sources of information to gather as
a precursor for Collection and to identify potential systems of interest for Lateral Movement.
Networks often contain shared network drives and folders that enable users to access file directories on various systems across a network.

## Log Source
```yaml
category: ps_script
definition: 'Requirements: Script Block Logging must be enabled'
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  ScriptBlockText|contains: get-smbshare
```

## MITRE ATT&CK
- T1069.001

## False Positives
- Unknown

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1069.002/T1069.002.md

## Metadata
- **Author:** frack113
- **Date:** 2021-12-15
- **Rule ID:** `95f0643a-ed40-467c-806b-aac9542ec5ab`
- **Source file:** `windows/powershell/powershell_script/posh_ps_susp_smb_share_reco.yml`
