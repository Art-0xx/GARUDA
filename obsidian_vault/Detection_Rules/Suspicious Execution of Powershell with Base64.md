---
type: detection_rule
title: "Suspicious Execution of Powershell with Base64"
rule_id: fb843269-508c-4b76-8b8d-88679db22ce7
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059.001]
---

# Suspicious Execution of Powershell with Base64

## Description
Commandline to launch powershell with a base64 payload

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_*
filter_azure:
  ParentImage|contains:
  - C:\Packages\Plugins\Microsoft.GuestConfiguration.ConfigurationforWindows\
  - \gc_worker.exe
filter_encoding:
  CommandLine|contains: ' -Encoding '
selection:
  CommandLine|contains:
  - ' -e '
  - ' -en '
  - ' -enc '
  - ' -enco'
  - ' -ec '
  Image|endswith:
  - \powershell.exe
  - \pwsh.exe
```

## MITRE ATT&CK
- T1059.001

## False Positives
- Unknown

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1059.001/T1059.001.md#atomic-test-20---powershell-invoke-known-malicious-cmdlets
- https://unit42.paloaltonetworks.com/unit42-pulling-back-the-curtains-on-encodedcommand-powershell-attacks/
- https://mikefrobbins.com/2017/06/15/simple-obfuscation-with-powershell-using-base64-encoding/

## Metadata
- **Author:** frack113
- **Date:** 2022-01-02
- **Rule ID:** `fb843269-508c-4b76-8b8d-88679db22ce7`
- **Source file:** `windows/process_creation/proc_creation_win_powershell_encode.yml`
