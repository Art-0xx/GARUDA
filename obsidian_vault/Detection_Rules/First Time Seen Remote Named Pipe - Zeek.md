---
type: detection_rule
title: "First Time Seen Remote Named Pipe - Zeek"
rule_id: 021310d9-30a6-480a-84b7-eaa69aeb92bb
platform: network
level: high
status: test
tags: [detection, sigma, network]
mitre_tags: [attack.t1021.002]
---

# First Time Seen Remote Named Pipe - Zeek

## Description
This detection excludes known namped pipes accessible remotely and notify on newly observed ones, may help to detect lateral movement and remote exec using named pipes

## Log Source
```yaml
product: zeek
service: smb_files
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_*
filter_keywords:
- samr
- lsarpc
- winreg
- netlogon
- srvsvc
- protected_storage
- wkssvc
- browser
- netdfs
- svcctl
- spoolss
- ntsvcs
- LSM_API_service
- HydraLsPipe
- TermSrv_API_service
- MsFteWds
selection:
  path: \\\\\*\\IPC$
```

## MITRE ATT&CK
- T1021.002

## False Positives
- Update the excluded named pipe to filter out any newly observed legit named pipe

## References
- https://twitter.com/menasec1/status/1104489274387451904

## Metadata
- **Author:** Samir Bousseaden, @neu5ron, Tim Shelton
- **Date:** 2020-04-02
- **Rule ID:** `021310d9-30a6-480a-84b7-eaa69aeb92bb`
- **Source file:** `network/zeek/zeek_smb_converted_win_lm_namedpipe.yml`
