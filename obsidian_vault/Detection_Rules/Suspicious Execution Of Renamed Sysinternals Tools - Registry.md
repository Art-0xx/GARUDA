---
type: detection_rule
title: "Suspicious Execution Of Renamed Sysinternals Tools - Registry"
rule_id: f50f3c09-557d-492d-81db-9064a8d4e211
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1588.002]
---

# Suspicious Execution Of Renamed Sysinternals Tools - Registry

## Description
Detects the creation of the "accepteula" key related to the Sysinternals tools being created from executables with the wrong name (e.g. a renamed Sysinternals tool)

## Log Source
```yaml
category: registry_set
product: windows
```

## Detection Logic
```yaml
condition: selection and not filter
filter:
  Image|endswith:
  - \ADExplorer.exe
  - \ADExplorer64.exe
  - \ADExplorer64a.exe
  - \handle.exe
  - \handle64.exe
  - \handle64a.exe
  - \livekd.exe
  - \livekd64.exe
  - \procdump.exe
  - \procdump64.exe
  - \procdump64a.exe
  - \procexp.exe
  - \procexp64.exe
  - \procexp64a.exe
  - \PsExec.exe
  - \PsExec64.exe
  - \PsExec64a.exe
  - \PsLoggedon.exe
  - \PsLoggedon64.exe
  - \psloglist.exe
  - \psloglist64.exe
  - \psloglist64a.exe
  - \pspasswd.exe
  - \pspasswd64.exe
  - \pspasswd64a.exe
  - \PsPing.exe
  - \PsPing64.exe
  - \PsPing64a.exe
  - \PsService.exe
  - \PsService64.exe
  - \PsService64a.exe
  - \sdelete.exe
selection:
  TargetObject|contains:
  - \Active Directory Explorer
  - \Handle
  - \LiveKd
  - \ProcDump
  - \Process Explorer
  - \PsExec
  - \PsLoggedon
  - \PsLoglist
  - \PsPasswd
  - \PsPing
  - \PsService
  - \SDelete
  TargetObject|endswith: \EulaAccepted
```

## MITRE ATT&CK
- T1588.002

## False Positives
- Unlikely

## References
- Internal Research

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-08-24
- **Rule ID:** `f50f3c09-557d-492d-81db-9064a8d4e211`
- **Source file:** `windows/registry/registry_set/registry_set_pua_sysinternals_renamed_execution_via_eula.yml`
