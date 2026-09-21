---
type: detection_rule
title: "Download File To Potentially Suspicious Directory Via Wget"
rule_id: cf610c15-ed71-46e1-bdf8-2bd1a99de6c4
platform: linux
level: medium
status: test
tags: [detection, sigma, linux]
mitre_tags: [attack.t1105]
---

# Download File To Potentially Suspicious Directory Via Wget

## Description
Detects the use of wget to download content to a suspicious directory

## Log Source
```yaml
category: process_creation
product: linux
```

## Detection Logic
```yaml
condition: all of selection_*
selection_img:
  Image|endswith: /wget
selection_output:
- CommandLine|re: \s-O\s
- CommandLine|contains: --output-document
selection_path:
  CommandLine|contains: /tmp/
```

## MITRE ATT&CK
- T1105

## False Positives
- Unknown

## References
- https://blogs.jpcert.or.jp/en/2023/05/gobrat.html
- https://jstnk9.github.io/jstnk9/research/GobRAT-Malware/
- https://www.virustotal.com/gui/file/60bcd645450e4c846238cf0e7226dc40c84c96eba99f6b2cffcd0ab4a391c8b3/detection
- https://www.virustotal.com/gui/file/3e44c807a25a56f4068b5b8186eee5002eed6f26d665a8b791c472ad154585d1/detection

## Metadata
- **Author:** Joseliyo Sanchez, @Joseliyo_Jstnk
- **Date:** 2023-06-02
- **Rule ID:** `cf610c15-ed71-46e1-bdf8-2bd1a99de6c4`
- **Source file:** `linux/process_creation/proc_creation_lnx_wget_download_suspicious_directory.yml`
