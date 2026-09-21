---
type: detection_rule
title: "Wscript Shell Run In CommandLine"
rule_id: 2c28c248-7f50-417a-9186-a85b223010ee
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059]
---

# Wscript Shell Run In CommandLine

## Description
Detects the presence of the keywords "Wscript", "Shell" and "Run" in the command, which could indicate a suspicious activity

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
  - Wscript.
  - .Shell
  - .Run
```

## MITRE ATT&CK
- T1059

## False Positives
- Inline scripting can be used by some rare third party applications or administrators. Investigate and apply additional filters accordingly

## References
- https://web.archive.org/web/20220830122045/http://blog.talosintelligence.com/2022/08/modernloader-delivers-multiple-stealers.html
- https://blog.talosintelligence.com/modernloader-delivers-multiple-stealers-cryptominers-and-rats/

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-08-31
- **Rule ID:** `2c28c248-7f50-417a-9186-a85b223010ee`
- **Source file:** `windows/process_creation/proc_creation_win_mshta_inline_vbscript.yml`
