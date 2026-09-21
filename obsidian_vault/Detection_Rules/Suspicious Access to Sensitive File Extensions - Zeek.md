---
type: detection_rule
title: "Suspicious Access to Sensitive File Extensions - Zeek"
rule_id: 286b47ed-f6fe-40b3-b3a8-35129acd43bc
platform: network
level: medium
status: test
tags: [detection, sigma, network]
---

# Suspicious Access to Sensitive File Extensions - Zeek

## Description
Detects known sensitive file extensions via Zeek

## Log Source
```yaml
product: zeek
service: smb_files
```

## Detection Logic
```yaml
condition: selection
selection:
  name|endswith:
  - .pst
  - .ost
  - .msg
  - .nst
  - .oab
  - .edb
  - .nsf
  - .bak
  - .dmp
  - .kirbi
  - .rdp
```

## False Positives
- Help Desk operator doing backup or re-imaging end user machine or backup software
- Users working with these data types or exchanging message files

## References
- Internal Research

## Metadata
- **Author:** Samir Bousseaden, @neu5ron
- **Date:** 2020-04-02
- **Rule ID:** `286b47ed-f6fe-40b3-b3a8-35129acd43bc`
- **Source file:** `network/zeek/zeek_smb_converted_win_susp_raccess_sensitive_fext.yml`
