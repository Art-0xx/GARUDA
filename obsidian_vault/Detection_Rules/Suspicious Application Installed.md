---
type: detection_rule
title: "Suspicious Application Installed"
rule_id: 83c161b6-ca67-4f33-8ad0-644a0737cf07
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
---

# Suspicious Application Installed

## Description
Detects suspicious application installed by looking at the added shortcut to the app resolver cache

## Log Source
```yaml
product: windows
service: shell-core
```

## Detection Logic
```yaml
condition: 1 of selection_*
selection_name:
  EventID: 28115
  Name|contains:
  - Zenmap
  - AnyDesk
  - wireshark
  - openvpn
selection_packageid:
  AppID|contains:
  - zenmap.exe
  - prokzult ad
  - wireshark
  - openvpn
  EventID: 28115
```

## False Positives
- Packages or applications being legitimately used by users or administrators

## References
- https://nasbench.medium.com/finding-forensic-goodness-in-obscure-windows-event-logs-60e978ea45a3

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-08-14
- **Rule ID:** `83c161b6-ca67-4f33-8ad0-644a0737cf07`
- **Source file:** `windows/builtin/shell_core/win_shell_core_susp_packages_installed.yml`
