---
type: detection_rule
title: "Potential Persistence Via Netsh Helper DLL"
rule_id: 56321594-9087-49d9-bf10-524fe8479452
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1546.007]
---

# Potential Persistence Via Netsh Helper DLL

## Description
Detects the execution of netsh with "add helper" flag in order to add a custom helper DLL. This technique can be abused to add a malicious helper DLL that can be used as a persistence proxy that gets called when netsh.exe is executed.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
  CommandLine|contains|all:
  - add
  - helper
selection_img:
- OriginalFileName: netsh.exe
- Image|endswith: \netsh.exe
```

## MITRE ATT&CK
- T1546.007

## False Positives
- Unknown

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1546.007/T1546.007.md
- https://github.com/outflanknl/NetshHelperBeacon
- https://web.archive.org/web/20160928212230/https://www.adaptforward.com/2016/09/using-netshell-to-execute-evil-dlls-and-persist-on-a-host/

## Metadata
- **Author:** Victor Sergeev, oscd.community
- **Date:** 2019-10-25
- **Rule ID:** `56321594-9087-49d9-bf10-524fe8479452`
- **Source file:** `windows/process_creation/proc_creation_win_netsh_helper_dll_persistence.yml`
