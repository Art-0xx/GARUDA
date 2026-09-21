---
type: detection_rule
title: "Suspicious ASPX File Drop by Exchange"
rule_id: bd1212e5-78da-431e-95fa-c58e3237a8e6
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1505.003]
---

# Suspicious ASPX File Drop by Exchange

## Description
Detects suspicious file type dropped by an Exchange component in IIS into a suspicious folder

## Log Source
```yaml
category: file_event
product: windows
```

## Detection Logic
```yaml
condition: all of selection*
selection:
  CommandLine|contains: MSExchange
  Image|endswith: \w3wp.exe
  TargetFilename|contains:
  - FrontEnd\HttpProxy\
  - \inetpub\wwwroot\aspnet_client\
selection_types:
  TargetFilename|endswith:
  - .aspx
  - .asp
  - .ashx
```

## MITRE ATT&CK
- T1505.003

## False Positives
- Unknown

## References
- https://www.microsoft.com/security/blog/2022/09/30/analyzing-attacks-using-the-exchange-vulnerabilities-cve-2022-41040-and-cve-2022-41082/
- https://www.gteltsc.vn/blog/canh-bao-chien-dich-tan-cong-su-dung-lo-hong-zero-day-tren-microsoft-exchange-server-12714.html
- https://en.gteltsc.vn/blog/cap-nhat-nhe-ve-lo-hong-bao-mat-0day-microsoft-exchange-dang-duoc-su-dung-de-tan-cong-cac-to-chuc-tai-viet-nam-9685.html

## Metadata
- **Author:** Florian Roth (Nextron Systems), MSTI (query, idea)
- **Date:** 2022-10-01
- **Rule ID:** `bd1212e5-78da-431e-95fa-c58e3237a8e6`
- **Source file:** `windows/file/file_event/file_event_win_exchange_webshell_drop.yml`
