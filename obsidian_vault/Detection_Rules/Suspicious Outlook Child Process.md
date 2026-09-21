---
type: detection_rule
title: "Suspicious Outlook Child Process"
rule_id: 208748f7-881d-47ac-a29c-07ea84bf691d
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1204.002]
---

# Suspicious Outlook Child Process

## Description
Detects a suspicious process spawning from an Outlook process.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Image|endswith:
  - \AppVLP.exe
  - \bash.exe
  - \cmd.exe
  - \cscript.exe
  - \forfiles.exe
  - \hh.exe
  - \mftrace.exe
  - \msbuild.exe
  - \msdt.exe
  - \mshta.exe
  - \msiexec.exe
  - \powershell.exe
  - \pwsh.exe
  - \regsvr32.exe
  - \schtasks.exe
  - \scrcons.exe
  - \scriptrunner.exe
  - \sh.exe
  - \svchost.exe
  - \wmic.exe
  - \wscript.exe
  ParentImage|endswith: \OUTLOOK.EXE
```

## MITRE ATT&CK
- T1204.002

## False Positives
- Unknown

## References
- https://www.hybrid-analysis.com/sample/465aabe132ccb949e75b8ab9c5bda36d80cf2fd503d52b8bad54e295f28bbc21?environmentId=100
- https://mgreen27.github.io/posts/2018/04/02/DownloadCradle.html

## Metadata
- **Author:** Michael Haag, Florian Roth (Nextron Systems), Markus Neis, Elastic, FPT.EagleEye Team
- **Date:** 2022-02-28
- **Rule ID:** `208748f7-881d-47ac-a29c-07ea84bf691d`
- **Source file:** `windows/process_creation/proc_creation_win_office_outlook_susp_child_processes.yml`
