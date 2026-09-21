---
type: detection_rule
title: "Suspicious DotNET CLR Usage Log Artifact"
rule_id: e0b06658-7d1d-4cd3-bf15-03467507ff7c
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218]
---

# Suspicious DotNET CLR Usage Log Artifact

## Description
Detects the creation of Usage Log files by the CLR (clr.dll). These files are named after the executing process once the assembly is finished executing for the first time in the (user) session context.

## Log Source
```yaml
category: file_event
definition: 'Requirements: UsageLogs folder must be monitored by the sysmon configuration'
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_*
filter_main_rundll32:
  CommandLine|contains|all:
  - Temp
  - zzzzInvokeManagedCustomActionOutOfProc
  Image|endswith: \rundll32.exe
  ParentCommandLine|contains: ' -Embedding'
  ParentImage|endswith: \MsiExec.exe
selection:
  TargetFilename|endswith:
  - \UsageLogs\cmstp.exe.log
  - \UsageLogs\cscript.exe.log
  - \UsageLogs\mshta.exe.log
  - \UsageLogs\msxsl.exe.log
  - \UsageLogs\regsvr32.exe.log
  - \UsageLogs\rundll32.exe.log
  - \UsageLogs\svchost.exe.log
  - \UsageLogs\wscript.exe.log
  - \UsageLogs\wmic.exe.log
```

## MITRE ATT&CK
- T1218

## False Positives
- Rundll32.exe with zzzzInvokeManagedCustomActionOutOfProc in command line and msiexec.exe as parent process - https://twitter.com/SBousseaden/status/1388064061087260675

## References
- https://bohops.com/2021/03/16/investigating-net-clr-usage-log-tampering-techniques-for-edr-evasion/
- https://github.com/olafhartong/sysmon-modular/blob/fa1ae53132403d262be2bbd7f17ceea7e15e8c78/11_file_create/include_dotnet.xml
- https://web.archive.org/web/20221026202428/https://gist.github.com/code-scrap/d7f152ffcdb3e0b02f7f394f5187f008
- https://web.archive.org/web/20230329154538/https://blog.menasec.net/2019/07/interesting-difr-traces-of-net-clr.html

## Metadata
- **Author:** frack113, omkar72, oscd.community, Wojciech Lesicki
- **Date:** 2022-11-18
- **Rule ID:** `e0b06658-7d1d-4cd3-bf15-03467507ff7c`
- **Source file:** `windows/file/file_event/file_event_win_net_cli_artefact.yml`
