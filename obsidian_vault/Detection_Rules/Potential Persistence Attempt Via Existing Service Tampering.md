---
type: detection_rule
title: "Potential Persistence Attempt Via Existing Service Tampering"
rule_id: 38879043-7e1e-47a9-8d46-6bec88e201df
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1543.003, attack.t1574.011]
---

# Potential Persistence Attempt Via Existing Service Tampering

## Description
Detects the modification of an existing service in order to execute an arbitrary payload when the service is started or killed as a potential method for persistence.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection_sc or all of selection_reg_*
selection_reg_ext:
  CommandLine|contains:
  - .sh
  - .exe
  - .dll
  - .bin$
  - .bat
  - .cmd
  - .js
  - .msh$
  - .reg$
  - .scr
  - .ps
  - .vb
  - .jar
  - .pl
selection_reg_img:
- CommandLine|contains|all:
  - 'reg '
  - 'add '
  - FailureCommand
- CommandLine|contains|all:
  - 'reg '
  - 'add '
  - ImagePath
selection_sc:
- CommandLine|contains|all:
  - 'sc '
  - 'config '
  - binpath=
- CommandLine|contains|all:
  - 'sc '
  - failure
  - command=
```

## MITRE ATT&CK
- T1543.003
- T1574.011

## False Positives
- Unknown

## References
- https://pentestlab.blog/2020/01/22/persistence-modify-existing-service/

## Metadata
- **Author:** Sreeman
- **Date:** 2020-09-29
- **Rule ID:** `38879043-7e1e-47a9-8d46-6bec88e201df`
- **Source file:** `windows/process_creation/proc_creation_win_sc_service_tamper_for_persistence.yml`
