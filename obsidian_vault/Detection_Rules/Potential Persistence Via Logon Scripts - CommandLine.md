---
type: detection_rule
title: "Potential Persistence Via Logon Scripts - CommandLine"
rule_id: 21d856f9-9281-4ded-9377-51a1a6e2a432
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1037.001]
---

# Potential Persistence Via Logon Scripts - CommandLine

## Description
Detects the addition of a new LogonScript to the registry value "UserInitMprLogonScript" for potential persistence

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains: UserInitMprLogonScript
```

## MITRE ATT&CK
- T1037.001

## False Positives
- Legitimate addition of Logon Scripts via the command line by administrators or third party tools

## References
- https://cocomelonc.github.io/persistence/2022/12/09/malware-pers-20.html

## Metadata
- **Author:** Tom Ueltschi (@c_APT_ure)
- **Date:** 2019-01-12
- **Rule ID:** `21d856f9-9281-4ded-9377-51a1a6e2a432`
- **Source file:** `windows/process_creation/proc_creation_win_registry_logon_script.yml`
