---
type: detection_rule
title: "Potential PowerShell Command Line Obfuscation"
rule_id: d7bcd677-645d-4691-a8d4-7a5602b780d1
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1027, attack.t1059.001]
---

# Potential PowerShell Command Line Obfuscation

## Description
Detects the PowerShell command lines with special characters

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_* and not 1 of filter_optional_*
filter_optional_amazonSSM:
  ParentImage: C:\Program Files\Amazon\SSM\ssm-document-worker.exe
filter_optional_defender_atp:
  CommandLine|contains:
  - new EventSource("Microsoft.Windows.Sense.Client.Management"
  - public static extern bool InstallELAMCertificateInfo(SafeFileHandle handle);
selection_img:
- Image|endswith:
  - \powershell.exe
  - \pwsh.exe
- OriginalFileName:
  - PowerShell.EXE
  - pwsh.dll
selection_re:
- CommandLine|re: \+.*\+.*\+.*\+.*\+.*\+.*\+.*\+.*\+.*\+.*\+.*\+.*\+.*\+
- CommandLine|re: \{.*\{.*\{.*\{.*\{.*\{.*\{.*\{.*\{.*\{
- CommandLine|re: \^.*\^.*\^.*\^.*\^
- CommandLine|re: '`.*`.*`.*`.*`'
```

## MITRE ATT&CK
- T1027
- T1059.001

## False Positives
- Amazon SSM Document Worker
- Windows Defender ATP

## References
- https://speakerdeck.com/heirhabarov/hunting-for-powershell-abuse?slide=64

## Metadata
- **Author:** Teymur Kheirkhabarov (idea), Vasiliy Burov (rule), oscd.community, Tim Shelton (fp)
- **Date:** 2020-10-15
- **Rule ID:** `d7bcd677-645d-4691-a8d4-7a5602b780d1`
- **Source file:** `windows/process_creation/proc_creation_win_powershell_cmdline_special_characters.yml`
