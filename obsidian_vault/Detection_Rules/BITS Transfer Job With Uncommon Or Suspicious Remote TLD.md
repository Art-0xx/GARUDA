---
type: detection_rule
title: "BITS Transfer Job With Uncommon Or Suspicious Remote TLD"
rule_id: 6d44fb93-e7d2-475c-9d3d-54c9c1e33427
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1197]
---

# BITS Transfer Job With Uncommon Or Suspicious Remote TLD

## Description
Detects a suspicious download using the BITS client from a FQDN that is unusual. Adversaries may abuse BITS jobs to persistently execute or clean up after malicious payloads.

## Log Source
```yaml
product: windows
service: bits-client
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_*
filter_main_generic:
  RemoteName|contains:
  - .azureedge.net/
  - .com/
  - .sfx.ms/
  - download.mozilla.org/
  - cdn.onenote.net/
  - cdn.office.net/
  - tscdn.m365.static.microsoft/
selection:
  EventID: 16403
```

## MITRE ATT&CK
- T1197

## False Positives
- This rule doesn't exclude other known TLDs such as ".org" or ".net". It's recommended to apply additional filters for software and scripts that leverage the BITS service

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1197/T1197.md
- https://twitter.com/malmoeb/status/1535142803075960832

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2022-06-10
- **Rule ID:** `6d44fb93-e7d2-475c-9d3d-54c9c1e33427`
- **Source file:** `windows/builtin/bits_client/win_bits_client_new_transfer_via_uncommon_tld.yml`
