---
type: detection_rule
title: "Potential Powershell ReverseShell Connection"
rule_id: edc2f8ae-2412-4dfd-b9d5-0c57727e70be
platform: windows
level: high
status: stable
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059.001]
---

# Potential Powershell ReverseShell Connection

## Description
Detects usage of the "TcpClient" class. Which can be abused to establish remote connections and reverse-shells. As seen used by the Nishang "Invoke-PowerShellTcpOneLine" reverse shell and other.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
  CommandLine|contains|all:
  - ' Net.Sockets.TCPClient'
  - .GetStream(
  - .Write(
selection_img:
- OriginalFileName:
  - PowerShell.EXE
  - pwsh.dll
- Image|endswith:
  - \powershell.exe
  - \pwsh.exe
```

## MITRE ATT&CK
- T1059.001

## False Positives
- In rare administrative cases, this function might be used to check network connectivity

## References
- https://www.volexity.com/blog/2021/03/02/active-exploitation-of-microsoft-exchange-zero-day-vulnerabilities/
- https://www.microsoft.com/security/blog/2021/03/02/hafnium-targeting-exchange-servers/
- https://github.com/samratashok/nishang/blob/414ee1104526d7057f9adaeee196d91ae447283e/Shells/Invoke-PowerShellTcpOneLine.ps1

## Metadata
- **Author:** FPT.EagleEye, wagga, Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2021-03-03
- **Rule ID:** `edc2f8ae-2412-4dfd-b9d5-0c57727e70be`
- **Source file:** `windows/process_creation/proc_creation_win_powershell_reverse_shell_connection.yml`
