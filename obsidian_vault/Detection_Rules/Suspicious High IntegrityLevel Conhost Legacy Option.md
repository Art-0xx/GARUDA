---
type: detection_rule
title: "Suspicious High IntegrityLevel Conhost Legacy Option"
rule_id: 3037d961-21e9-4732-b27a-637bcc7bf539
platform: windows
level: informational
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1202]
---

# Suspicious High IntegrityLevel Conhost Legacy Option

## Description
ForceV1 asks for information directly from the kernel space. Conhost connects to the console application. High IntegrityLevel means the process is running with elevated privileges, such as an Administrator context.

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
  - conhost.exe
  - '0xffffffff'
  - -ForceV1
  IntegrityLevel:
  - High
  - S-1-16-12288
```

## MITRE ATT&CK
- T1202

## False Positives
- Very Likely, including launching cmd.exe via Run As Administrator

## References
- https://cybercryptosec.medium.com/covid-19-cyber-infection-c615ead7c29
- https://thedfirreport.com/2022/04/04/stolen-images-campaign-ends-in-conti-ransomware/
- https://learn.microsoft.com/en-us/windows/win32/secauthz/mandatory-integrity-control

## Metadata
- **Author:** frack113
- **Date:** 2022-12-09
- **Rule ID:** `3037d961-21e9-4732-b27a-637bcc7bf539`
- **Source file:** `windows/process_creation/proc_creation_win_conhost_legacy_option.yml`
