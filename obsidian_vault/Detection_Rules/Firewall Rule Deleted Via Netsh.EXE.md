---
type: detection_rule
title: "Firewall Rule Deleted Via Netsh.EXE"
rule_id: 1a5fefe6-734f-452e-a07d-fc1c35bce4b2
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1686.003]
---

# Firewall Rule Deleted Via Netsh.EXE

## Description
Detects the removal of a port or application rule in the Windows Firewall configuration using netsh

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_* and not 1 of filter_optional_*
filter_optional_avast:
  CommandLine|contains: advfirewall firewall delete rule name="Avast Antivirus Admin
    Client"
  ParentImage|endswith: \instup.exe
filter_optional_dropbox:
  CommandLine|contains: name=Dropbox
  ParentImage|endswith: \Dropbox.exe
selection_cli:
  CommandLine|contains|all:
  - firewall
  - 'delete '
selection_img:
- Image|endswith: \netsh.exe
- OriginalFileName: netsh.exe
```

## MITRE ATT&CK
- T1686.003

## False Positives
- Legitimate administration activity
- Software installations and removal

## References
- https://app.any.run/tasks/8bbd5b4c-b82d-4e6d-a3ea-d454594a37cc/

## Metadata
- **Author:** frack113
- **Date:** 2022-08-14
- **Rule ID:** `1a5fefe6-734f-452e-a07d-fc1c35bce4b2`
- **Source file:** `windows/process_creation/proc_creation_win_netsh_fw_delete_rule.yml`
