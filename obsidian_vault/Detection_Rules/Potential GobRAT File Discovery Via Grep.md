---
type: detection_rule
title: "Potential GobRAT File Discovery Via Grep"
rule_id: e34cfa0c-0a50-4210-9cb3-5632d08eb041
platform: linux
level: high
status: test
tags: [detection, sigma, linux]
mitre_tags: [attack.t1082]
---

# Potential GobRAT File Discovery Via Grep

## Description
Detects the use of grep to discover specific files created by the GobRAT malware

## Log Source
```yaml
category: process_creation
product: linux
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains:
  - apached
  - frpc
  - sshd.sh
  - zone.arm
  Image|endswith: /grep
```

## MITRE ATT&CK
- T1082

## False Positives
- Unknown

## References
- https://blogs.jpcert.or.jp/en/2023/05/gobrat.html
- https://www.virustotal.com/gui/file/60bcd645450e4c846238cf0e7226dc40c84c96eba99f6b2cffcd0ab4a391c8b3/detection
- https://www.virustotal.com/gui/file/3e44c807a25a56f4068b5b8186eee5002eed6f26d665a8b791c472ad154585d1/detection

## Metadata
- **Author:** Joseliyo Sanchez, @Joseliyo_Jstnk
- **Date:** 2023-06-02
- **Rule ID:** `e34cfa0c-0a50-4210-9cb3-5632d08eb041`
- **Source file:** `linux/process_creation/proc_creation_lnx_malware_gobrat_grep_payload_discovery.yml`
