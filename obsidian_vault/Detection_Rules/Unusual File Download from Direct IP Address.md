---
type: detection_rule
title: "Unusual File Download from Direct IP Address"
rule_id: 025bd229-fd1f-4fdb-97ab-20006e1a5368
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1564.004]
---

# Unusual File Download from Direct IP Address

## Description
Detects the download of suspicious file type from URLs with IP

## Log Source
```yaml
category: create_stream_hash
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Contents|re: http[s]?://[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}
  TargetFilename|contains:
  - .ps1:Zone
  - .bat:Zone
  - .exe:Zone
  - .vbe:Zone
  - .vbs:Zone
  - .dll:Zone
  - .one:Zone
  - .cmd:Zone
  - .hta:Zone
  - .xll:Zone
  - .lnk:Zone
```

## MITRE ATT&CK
- T1564.004

## False Positives
- Unknown

## References
- https://github.com/trustedsec/SysmonCommunityGuide/blob/adcdfee20999f422b974c8d4149bf4c361237db7/chapters/file-stream-creation-hash.md
- https://labs.withsecure.com/publications/detecting-onenote-abuse

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems), Florian Roth (Nextron Systems)
- **Date:** 2022-09-07
- **Rule ID:** `025bd229-fd1f-4fdb-97ab-20006e1a5368`
- **Source file:** `windows/create_stream_hash/create_stream_hash_susp_ip_domains.yml`
