---
type: detection_rule
title: "Suspicious ZipExec Execution"
rule_id: 90dcf730-1b71-4ae7-9ffc-6fcf62bd0132
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218, attack.t1202]
---

# Suspicious ZipExec Execution

## Description
ZipExec is a Proof-of-Concept (POC) tool to wrap binary-based tools into a password-protected zip file.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: run or delete
delete:
  CommandLine|contains|all:
  - /delete
  - Microsoft_Windows_Shell_ZipFolder:filename=
  - .zip
run:
  CommandLine|contains|all:
  - /generic:Microsoft_Windows_Shell_ZipFolder:filename=
  - .zip
  - '/pass:'
  - '/user:'
```

## MITRE ATT&CK
- T1218
- T1202

## False Positives
- Unknown

## References
- https://twitter.com/SBousseaden/status/1451237393017839616
- https://github.com/Tylous/ZipExec

## Metadata
- **Author:** frack113
- **Date:** 2021-11-07
- **Rule ID:** `90dcf730-1b71-4ae7-9ffc-6fcf62bd0132`
- **Source file:** `windows/process_creation/proc_creation_win_hktl_zipexec.yml`
