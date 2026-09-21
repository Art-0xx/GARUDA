---
type: detection_rule
title: "Transferring Files with Credential Data via Network Shares - Zeek"
rule_id: 2e69f167-47b5-4ae7-a390-47764529eff5
platform: network
level: medium
status: test
tags: [detection, sigma, network]
mitre_tags: [attack.t1003.002, attack.t1003.001, attack.t1003.003]
---

# Transferring Files with Credential Data via Network Shares - Zeek

## Description
Transferring files with well-known filenames (sensitive files with credential data) using network shares

## Log Source
```yaml
product: zeek
service: smb_files
```

## Detection Logic
```yaml
condition: selection
selection:
  name:
  - \mimidrv
  - \lsass
  - \windows\minidump\
  - \hiberfil
  - \sqldmpr
  - \sam
  - \ntds.dit
  - \security
```

## MITRE ATT&CK
- T1003.002
- T1003.001
- T1003.003

## False Positives
- Transferring sensitive files for legitimate administration work by legitimate administrator

## References
- https://www.slideshare.net/heirhabarov/hunting-for-credentials-dumping-in-windows-environment

## Metadata
- **Author:** @neu5ron, Teymur Kheirkhabarov, oscd.community
- **Date:** 2020-04-02
- **Rule ID:** `2e69f167-47b5-4ae7-a390-47764529eff5`
- **Source file:** `network/zeek/zeek_smb_converted_win_transferring_files_with_credential_data.yml`
