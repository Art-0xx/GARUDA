---
type: detection_rule
title: "LSASS Process Memory Dump Files"
rule_id: a5a2d357-1ab8-4675-a967-ef9990a59391
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1003.001]
---

# LSASS Process Memory Dump Files

## Description
Detects creation of files with names used by different memory dumping tools to create a memory dump of the LSASS process memory, which contains user credentials.

## Log Source
```yaml
category: file_event
product: windows
```

## Detection Logic
```yaml
condition: 1 of selection_*
selection_1:
  TargetFilename|endswith:
  - \Andrew.dmp
  - \Coredump.dmp
  - \lsass.dmp
  - \lsass.rar
  - \lsass.zip
  - \NotLSASS.zip
  - \PPLBlade.dmp
  - \rustive.dmp
selection_2:
  TargetFilename|contains:
  - \lsass_2
  - \lsassdmp
  - \lsassdump
selection_3:
  TargetFilename|contains|all:
  - \lsass
  - .dmp
selection_4:
  TargetFilename|contains: SQLDmpr
  TargetFilename|endswith: .mdmp
selection_5:
  TargetFilename|contains:
  - \nanodump
  - \proc_
  TargetFilename|endswith: .dmp
```

## MITRE ATT&CK
- T1003.001

## False Positives
- Unknown

## References
- https://www.google.com/search?q=procdump+lsass
- https://medium.com/@markmotig/some-ways-to-dump-lsass-exe-c4a75fdc49bf
- https://github.com/elastic/detection-rules/blob/c76a39796972ecde44cb1da6df47f1b6562c9770/rules/windows/credential_access_lsass_memdump_file_created.toml
- https://www.whiteoaksecurity.com/blog/attacks-defenses-dumping-lsass-no-mimikatz/
- https://github.com/helpsystems/nanodump

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2021-11-15
- **Rule ID:** `a5a2d357-1ab8-4675-a967-ef9990a59391`
- **Source file:** `windows/file/file_event/file_event_win_lsass_default_dump_file_names.yml`
