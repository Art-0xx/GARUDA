---
type: detection_rule
title: "HTTP Request to Low Reputation TLD or Suspicious File Extension"
rule_id: 68c2c604-92ad-468b-bf4a-aac49adad08c
platform: network
level: medium
status: experimental
tags: [detection, sigma, network]
---

# HTTP Request to Low Reputation TLD or Suspicious File Extension

## Description
Detects HTTP requests to low reputation TLDs (e.g. .xyz, .top, .ru) or ending in suspicious file extensions (.exe, .dll, .hta), which may indicate malicious activity.

## Log Source
```yaml
product: zeek
service: http
```

## Detection Logic
```yaml
condition: selection_suspicious_tld and 1 of selection_malicious_*
selection_malicious_ext:
  uri|endswith:
  - .bat
  - .bin
  - .cmd
  - .cpl
  - .dll
  - .dylib
  - .elf
  - .exe
  - .hta
  - .iso
  - .jar
  - .js
  - .lnk
  - .msi
  - .pif
  - .ps1
  - .py
  - .reg
  - .scr
  - .sh
  - .so
  - .vbs
  - .wsf
selection_malicious_mime:
  resp_mime_types:
  - application/vnd.microsoft.portable-executable
  - application/x-bat
  - application/x-dosexec
  - application/x-elf
  - application/x-iso9660-image
  - application/x-java-archive
  - application/x-ms-shortcut
  - application/x-msdos-program
  - application/x-msdownload
  - application/x-python-code
  - application/x-sh
selection_suspicious_tld:
  host|endswith:
  - .bid
  - .by
  - .cf
  - .click
  - .cm
  - .ga
  - .gq
  - .ir
  - .kp
  - .loan
  - .ml
  - .mm
  - .party
  - .pw
  - .ru
  - .su
  - .sy
  - .tk
  - .top
  - .tv
  - .ve
  - .work
  - .xyz
```

## False Positives
- Rare legitimate software downloads from low quality TLDs

## References
- https://www.howtogeek.com/137270/50-file-extensions-that-are-potentially-dangerous-on-windows
- https://www.spamhaus.org/reputation-statistics/cctlds/domains/

## Metadata
- **Author:** @signalblur, Corelight
- **Date:** 2025-02-26
- **Rule ID:** `68c2c604-92ad-468b-bf4a-aac49adad08c`
- **Source file:** `network/zeek/zeek_http_susp_file_ext_from_susp_tld.yml`
