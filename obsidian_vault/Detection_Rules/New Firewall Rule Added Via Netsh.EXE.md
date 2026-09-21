---
type: detection_rule
title: "New Firewall Rule Added Via Netsh.EXE"
rule_id: cd5cfd80-aa5f-44c0-9c20-108c4ae12e3c
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1686.003]
---

# New Firewall Rule Added Via Netsh.EXE

## Description
Detects the addition of a new rule to the Windows firewall via netsh

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_* and not 1 of filter_optional_*
filter_optional_dropbox:
  CommandLine|contains:
  - advfirewall firewall add rule name=Dropbox dir=in action=allow "program=?:\Program
    Files (x86)\Dropbox\Client\Dropbox.exe" enable=yes profile=Any
  - advfirewall firewall add rule name=Dropbox dir=in action=allow "program=?:\Program
    Files\Dropbox\Client\Dropbox.exe" enable=yes profile=Any
selection_cli:
  CommandLine|contains|all:
  - ' firewall '
  - ' add '
selection_img:
- Image|endswith: \netsh.exe
- OriginalFileName: netsh.exe
```

## MITRE ATT&CK
- T1686.003

## False Positives
- Legitimate administration activity
- Software installations

## References
- https://web.archive.org/web/20190508165435/https://www.operationblockbuster.com/wp-content/uploads/2016/02/Operation-Blockbuster-RAT-and-Staging-Report.pdf

## Metadata
- **Author:** Markus Neis, Sander Wiebing
- **Date:** 2019-01-29
- **Rule ID:** `cd5cfd80-aa5f-44c0-9c20-108c4ae12e3c`
- **Source file:** `windows/process_creation/proc_creation_win_netsh_fw_add_rule.yml`
