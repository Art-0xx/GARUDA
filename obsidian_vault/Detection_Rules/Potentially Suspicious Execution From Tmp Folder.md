---
type: detection_rule
title: "Potentially Suspicious Execution From Tmp Folder"
rule_id: 312b42b1-bded-4441-8b58-163a3af58775
platform: linux
level: medium
status: test
tags: [detection, sigma, linux]
mitre_tags: [attack.t1036]
---

# Potentially Suspicious Execution From Tmp Folder

## Description
Detects a potentially suspicious execution of a process located in the '/tmp/' folder

## Log Source
```yaml
category: process_creation
product: linux
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_optional_*
filter_optional_nextcloud:
  Image|endswith: /usr/bin/nextcloud
selection:
  Image|startswith: /tmp/
```

## MITRE ATT&CK
- T1036

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
- **Rule ID:** `312b42b1-bded-4441-8b58-163a3af58775`
- **Source file:** `linux/process_creation/proc_creation_lnx_susp_execution_tmp_folder.yml`
