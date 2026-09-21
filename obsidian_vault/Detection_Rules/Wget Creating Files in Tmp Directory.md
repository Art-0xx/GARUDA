---
type: detection_rule
title: "Wget Creating Files in Tmp Directory"
rule_id: 35a05c60-9012-49b6-a11f-6bab741c9f74
platform: linux
level: medium
status: test
tags: [detection, sigma, linux]
mitre_tags: [attack.t1105]
---

# Wget Creating Files in Tmp Directory

## Description
Detects the use of wget to download content in a temporary directory such as "/tmp" or "/var/tmp"

## Log Source
```yaml
category: file_event
product: linux
```

## Detection Logic
```yaml
condition: selection
selection:
  Image|endswith: /wget
  TargetFilename|startswith:
  - /tmp/
  - /var/tmp/
```

## MITRE ATT&CK
- T1105

## False Positives
- Legitimate downloads of files in the tmp folder.

## References
- https://blogs.jpcert.or.jp/en/2023/05/gobrat.html
- https://jstnk9.github.io/jstnk9/research/GobRAT-Malware/
- https://www.virustotal.com/gui/file/60bcd645450e4c846238cf0e7226dc40c84c96eba99f6b2cffcd0ab4a391c8b3/detection
- https://www.virustotal.com/gui/file/3e44c807a25a56f4068b5b8186eee5002eed6f26d665a8b791c472ad154585d1/detection

## Metadata
- **Author:** Joseliyo Sanchez, @Joseliyo_Jstnk
- **Date:** 2023-06-02
- **Rule ID:** `35a05c60-9012-49b6-a11f-6bab741c9f74`
- **Source file:** `linux/file_event/file_event_lnx_wget_download_file_in_tmp_dir.yml`
