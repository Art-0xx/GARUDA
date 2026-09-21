---
type: detection_rule
title: "Suspicious HWP Sub Processes"
rule_id: 023394c4-29d5-46ab-92b8-6a534c6f447b
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1566.001, attack.t1203, attack.t1059.003]
---

# Suspicious HWP Sub Processes

## Description
Detects suspicious Hangul Word Processor (Hanword) sub processes that could indicate an exploitation

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Image|endswith: \gbb.exe
  ParentImage|endswith: \Hwp.exe
```

## MITRE ATT&CK
- T1566.001
- T1203
- T1059.003

## False Positives
- Unknown

## References
- https://www.securitynewspaper.com/2016/11/23/technical-teardown-exploit-malware-hwp-files/
- https://www.hybrid-analysis.com/search?query=context:74940dcc5b38f9f9b1a0fea760d344735d7d91b610e6d5bd34533dd0153402c5&from_sample=5db135000388385a7644131f&block_redirect=1
- https://twitter.com/cyberwar_15/status/1187287262054076416
- https://blog.alyac.co.kr/1901
- https://en.wikipedia.org/wiki/Hangul_(word_processor)

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2019-10-24
- **Rule ID:** `023394c4-29d5-46ab-92b8-6a534c6f447b`
- **Source file:** `windows/process_creation/proc_creation_win_hwp_exploits.yml`
