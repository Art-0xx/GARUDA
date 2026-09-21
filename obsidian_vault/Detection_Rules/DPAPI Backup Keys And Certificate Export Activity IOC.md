---
type: detection_rule
title: "DPAPI Backup Keys And Certificate Export Activity IOC"
rule_id: 7892ec59-c5bb-496d-8968-e5d210ca3ac4
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1555, attack.t1552.004]
---

# DPAPI Backup Keys And Certificate Export Activity IOC

## Description
Detects file names with specific patterns seen generated and used by tools such as Mimikatz and DSInternals related to exported or stolen DPAPI backup keys and certificates.

## Log Source
```yaml
category: file_event
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  TargetFilename|contains:
  - ntds_capi_
  - ntds_legacy_
  - ntds_unknown_
  TargetFilename|endswith:
  - .cer
  - .key
  - .pfx
  - .pvk
```

## MITRE ATT&CK
- T1555
- T1552.004

## False Positives
- Unlikely

## References
- https://www.dsinternals.com/en/dpapi-backup-key-theft-auditing/
- https://github.com/MichaelGrafnetter/DSInternals/blob/39ee8a69bbdc1cfd12c9afdd7513b4788c4895d4/Src/DSInternals.Common/Data/DPAPI/DPAPIBackupKey.cs#L28-L32

## Metadata
- **Author:** Nounou Mbeiri, Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2024-06-26
- **Rule ID:** `7892ec59-c5bb-496d-8968-e5d210ca3ac4`
- **Source file:** `windows/file/file_event/file_event_win_susp_dpapi_backup_and_cert_export_ioc.yml`
