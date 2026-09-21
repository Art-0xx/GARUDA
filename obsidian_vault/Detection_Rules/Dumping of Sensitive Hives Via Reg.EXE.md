---
type: detection_rule
title: "Dumping of Sensitive Hives Via Reg.EXE"
rule_id: fd877b94-9bb5-4191-bb25-d79cbd93c167
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1003.002, attack.t1003.004, attack.t1003.005]
---

# Dumping of Sensitive Hives Via Reg.EXE

## Description
Detects the usage of "reg.exe" in order to dump sensitive registry hives. This includes SAM, SYSTEM and SECURITY hives.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli_flag:
  CommandLine|contains:
  - ' save '
  - ' export '
  - " \u02E2ave "
  - " e\u02E3port "
selection_cli_hive:
  CommandLine|contains:
  - \system
  - \sam
  - \security
  - "\\\u02E2ystem"
  - "\\sy\u02E2tem"
  - "\\\u02E2y\u02E2tem"
  - "\\\u02E2am"
  - "\\\u02E2ecurity"
selection_cli_hklm:
  CommandLine|contains:
  - hklm
  - "hk\u02EAm"
  - hkey_local_machine
  - "hkey_\u02EAocal_machine"
  - "hkey_loca\u02EA_machine"
  - "hkey_\u02EAoca\u02EA_machine"
selection_img:
- Image|endswith: \reg.exe
- OriginalFileName: reg.exe
```

## MITRE ATT&CK
- T1003.002
- T1003.004
- T1003.005

## False Positives
- Dumping hives for legitimate purpouse i.e. backup or forensic investigation

## References
- https://www.slideshare.net/heirhabarov/hunting-for-credentials-dumping-in-windows-environment
- https://eqllib.readthedocs.io/en/latest/analytics/aed95fc6-5e3f-49dc-8b35-06508613f979.html
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1003/T1003.md
- https://www.wietzebeukema.nl/blog/windows-command-line-obfuscation
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1003.002/T1003.002.md#atomic-test-1---registry-dump-of-sam-creds-and-secrets

## Metadata
- **Author:** Teymur Kheirkhabarov, Endgame, JHasenbusch, Daniil Yugoslavskiy, oscd.community, frack113
- **Date:** 2019-10-22
- **Rule ID:** `fd877b94-9bb5-4191-bb25-d79cbd93c167`
- **Source file:** `windows/process_creation/proc_creation_win_reg_dumping_sensitive_hives.yml`
