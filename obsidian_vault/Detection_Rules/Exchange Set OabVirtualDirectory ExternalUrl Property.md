---
type: detection_rule
title: "Exchange Set OabVirtualDirectory ExternalUrl Property"
rule_id: 9db37458-4df2-46a5-95ab-307e7f29e675
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1505.003]
---

# Exchange Set OabVirtualDirectory ExternalUrl Property

## Description
Rule to detect an adversary setting OabVirtualDirectory External URL property to a script in Exchange Management log

## Log Source
```yaml
product: windows
service: msexchange-management
```

## Detection Logic
```yaml
condition: keywords
keywords:
  '|all':
  - Set-OabVirtualDirectory
  - ExternalUrl
  - Page_Load
  - script
```

## MITRE ATT&CK
- T1505.003

## False Positives
- Unknown

## References
- https://twitter.com/OTR_Community/status/1371053369071132675

## Metadata
- **Author:** Jose Rodriguez @Cyb3rPandaH
- **Date:** 2021-03-15
- **Rule ID:** `9db37458-4df2-46a5-95ab-307e7f29e675`
- **Source file:** `windows/builtin/msexchange/win_exchange_set_oabvirtualdirectory_externalurl.yml`
