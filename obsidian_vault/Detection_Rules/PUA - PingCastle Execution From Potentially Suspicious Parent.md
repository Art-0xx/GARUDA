---
type: detection_rule
title: "PUA - PingCastle Execution From Potentially Suspicious Parent"
rule_id: b37998de-a70b-4f33-b219-ec36bf433dc0
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1595]
---

# PUA - PingCastle Execution From Potentially Suspicious Parent

## Description
Detects the execution of PingCastle, a tool designed to quickly assess the Active Directory security level via a script located in a potentially suspicious or uncommon location.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: 1 of selection_parent_* and selection_parent_ext and selection_cli
selection_cli:
- Image|endswith: \PingCastle.exe
- OriginalFileName: PingCastle.exe
- Product: Ping Castle
- CommandLine|contains:
  - --scanner aclcheck
  - --scanner antivirus
  - --scanner computerversion
  - --scanner foreignusers
  - --scanner laps_bitlocker
  - --scanner localadmin
  - --scanner nullsession
  - --scanner nullsession-trust
  - --scanner oxidbindings
  - --scanner remote
  - --scanner share
  - --scanner smb
  - --scanner smb3querynetwork
  - --scanner spooler
  - --scanner startup
  - --scanner zerologon
- CommandLine|contains: --no-enum-limit
- CommandLine|contains|all:
  - --healthcheck
  - --level Full
- CommandLine|contains|all:
  - --healthcheck
  - '--server '
selection_parent_ext:
  ParentCommandLine|contains:
  - .bat
  - .chm
  - .cmd
  - .hta
  - .htm
  - .html
  - .js
  - .lnk
  - .ps1
  - .vbe
  - .vbs
  - .wsf
selection_parent_path_1:
  ParentCommandLine|contains:
  - :\Perflogs\
  - :\Temp\
  - :\Users\Public\
  - :\Windows\Temp\
  - \AppData\Local\Temp
  - \AppData\Roaming\
  - \Temporary Internet
selection_parent_path_2:
- ParentCommandLine|contains|all:
  - :\Users\
  - \Favorites\
- ParentCommandLine|contains|all:
  - :\Users\
  - \Favourites\
- ParentCommandLine|contains|all:
  - :\Users\
  - \Contacts\
```

## MITRE ATT&CK
- T1595

## False Positives
- Unknown

## References
- https://github.com/vletoux/pingcastle
- https://thedfirreport.com/2023/10/30/netsupport-intrusion-results-in-domain-compromise/
- https://github.com/fengjixuchui/Start-ADEnum/blob/e237a739db98b6104427d833004836507da36a58/Functions/Start-ADEnum.ps1#L450
- https://github.com/lkys37en/Start-ADEnum/blob/5b42c54215fe5f57fc59abc52c20487d15764005/Functions/Start-ADEnum.ps1#L680
- https://github.com/projectHULK/AD_Recon/blob/dde2daba9b3393a9388cbebda87068972cc0bd3b/SecurityAssessment.ps1#L2699

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems), X__Junior (Nextron Systems)
- **Date:** 2024-01-11
- **Rule ID:** `b37998de-a70b-4f33-b219-ec36bf433dc0`
- **Source file:** `windows/process_creation/proc_creation_win_pua_pingcastle_script_parent.yml`
