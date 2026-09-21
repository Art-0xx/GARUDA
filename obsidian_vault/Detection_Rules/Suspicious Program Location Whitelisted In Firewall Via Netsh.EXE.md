---
type: detection_rule
title: "Suspicious Program Location Whitelisted In Firewall Via Netsh.EXE"
rule_id: a35f5a72-f347-4e36-8895-9869b0d5fc6d
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1686.003]
---

# Suspicious Program Location Whitelisted In Firewall Via Netsh.EXE

## Description
Detects Netsh command execution that whitelists a program located in a suspicious location in the Windows Firewall

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
- CommandLine|contains|all:
  - firewall
  - add
  - allowedprogram
- CommandLine|contains|all:
  - advfirewall
  - firewall
  - add
  - rule
  - action=allow
  - program=
selection_img:
- Image|endswith: \netsh.exe
- OriginalFileName: netsh.exe
selection_paths:
  CommandLine|contains:
  - :\$Recycle.bin\
  - :\RECYCLER.BIN\
  - :\RECYCLERS.BIN\
  - :\SystemVolumeInformation\
  - :\Temp\
  - :\Users\Default\
  - :\Users\Desktop\
  - :\Users\Public\
  - :\Windows\addins\
  - :\Windows\cursors\
  - :\Windows\debug\
  - :\Windows\drivers\
  - :\Windows\fonts\
  - :\Windows\help\
  - :\Windows\system32\tasks\
  - :\Windows\Tasks\
  - :\Windows\Temp\
  - \Downloads\
  - \Local Settings\Temporary Internet Files\
  - \Temporary Internet Files\Content.Outlook\
  - '%Public%\'
  - '%TEMP%'
  - '%TMP%'
```

## MITRE ATT&CK
- T1686.003

## False Positives
- Unknown

## References
- https://www.virusradar.com/en/Win32_Kasidet.AD/description
- https://www.hybrid-analysis.com/sample/07e789f4f2f3259e7559fdccb36e96814c2dbff872a21e1fa03de9ee377d581f?environmentId=100

## Metadata
- **Author:** Sander Wiebing, Jonhnathan Ribeiro, Daniil Yugoslavskiy, oscd.community
- **Date:** 2020-05-25
- **Rule ID:** `a35f5a72-f347-4e36-8895-9869b0d5fc6d`
- **Source file:** `windows/process_creation/proc_creation_win_netsh_fw_allow_program_in_susp_location.yml`
