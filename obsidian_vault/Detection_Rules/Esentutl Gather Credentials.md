---
type: detection_rule
title: "Esentutl Gather Credentials"
rule_id: 7df1713a-1a5b-4a4b-a071-dc83b144a101
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1003, attack.t1003.003]
---

# Esentutl Gather Credentials

## Description
Conti recommendation to its affiliates to use esentutl to access NTDS dumped file. Trickbot also uses this utilities to get MSEdge info via its module pwgrab.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains|all:
  - esentutl
  - ' /p'
```

## MITRE ATT&CK
- T1003
- T1003.003

## False Positives
- To be determined

## References
- https://twitter.com/vxunderground/status/1423336151860002816
- https://thedfirreport.com/2021/08/01/bazarcall-to-conti-ransomware-via-trickbot-and-cobalt-strike/

## Metadata
- **Author:** sam0x90
- **Date:** 2021-08-06
- **Rule ID:** `7df1713a-1a5b-4a4b-a071-dc83b144a101`
- **Source file:** `windows/process_creation/proc_creation_win_esentutl_params.yml`
