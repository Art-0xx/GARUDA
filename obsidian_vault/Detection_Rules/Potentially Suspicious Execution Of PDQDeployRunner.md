---
type: detection_rule
title: "Potentially Suspicious Execution Of PDQDeployRunner"
rule_id: 12b8e9f5-96b2-41e1-9a42-8c6779a5c184
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
---

# Potentially Suspicious Execution Of PDQDeployRunner

## Description
Detects suspicious execution of "PDQDeployRunner" which is part of the PDQDeploy service stack that is responsible for executing commands and packages on a remote machines

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_child:
- Image|endswith:
  - \bash.exe
  - \certutil.exe
  - \cmd.exe
  - \csc.exe
  - \cscript.exe
  - \dllhost.exe
  - \mshta.exe
  - \msiexec.exe
  - \regsvr32.exe
  - \rundll32.exe
  - \scriptrunner.exe
  - \wmic.exe
  - \wscript.exe
  - \wsl.exe
- Image|contains:
  - :\ProgramData\
  - :\Users\Public\
  - :\Windows\TEMP\
  - \AppData\Local\Temp
- CommandLine|contains:
  - ' -decode '
  - ' -enc '
  - ' -encodedcommand '
  - ' -w hidden'
  - DownloadString
  - FromBase64String
  - http
  - 'iex '
  - Invoke-
selection_parent:
  ParentImage|contains: \PDQDeployRunner-
```

## False Positives
- Legitimate use of the PDQDeploy tool to execute these commands

## References
- https://twitter.com/malmoeb/status/1550483085472432128

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-07-22
- **Rule ID:** `12b8e9f5-96b2-41e1-9a42-8c6779a5c184`
- **Source file:** `windows/process_creation/proc_creation_win_pdqdeploy_runner_susp_children.yml`
