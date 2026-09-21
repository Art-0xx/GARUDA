---
type: detection_rule
title: "Command Line Execution with Suspicious URL and AppData Strings"
rule_id: 1ac8666b-046f-4201-8aba-1951aaec03a3
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059.003, attack.t1059.001, attack.t1105]
---

# Command Line Execution with Suspicious URL and AppData Strings

## Description
Detects a suspicious command line execution that includes an URL and AppData string in the command line parameters as used by several droppers (js/vbs > powershell)

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
  - http
  - ://
  - '%AppData%'
  Image|endswith: \cmd.exe
```

## MITRE ATT&CK
- T1059.003
- T1059.001
- T1105

## False Positives
- High

## References
- https://www.hybrid-analysis.com/sample/3a1f01206684410dbe8f1900bbeaaa543adfcd07368ba646b499fa5274b9edf6?environmentId=100
- https://www.hybrid-analysis.com/sample/f16c729aad5c74f19784a24257236a8bbe27f7cdc4a89806031ec7f1bebbd475?environmentId=100

## Metadata
- **Author:** Florian Roth (Nextron Systems), Jonhnathan Ribeiro, oscd.community
- **Date:** 2019-01-16
- **Rule ID:** `1ac8666b-046f-4201-8aba-1951aaec03a3`
- **Source file:** `windows/process_creation/proc_creation_win_cmd_http_appdata.yml`
