---
type: detection_rule
title: "Screen Capture with Import Tool"
rule_id: dbe4b9c5-c254-4258-9688-d6af0b7967fd
platform: linux
level: low
status: test
tags: [detection, sigma, linux]
mitre_tags: [attack.t1113]
---

# Screen Capture with Import Tool

## Description
Detects adversary creating screen capture of a desktop with Import Tool.
Highly recommended using rule on servers, due to high usage of screenshot utilities on user workstations.
ImageMagick must be installed.

## Log Source
```yaml
product: linux
service: auditd
```

## Detection Logic
```yaml
condition: import and (import_window_root or import_no_window_root)
import:
  a0: import
  type: EXECVE
import_no_window_root:
  a1|endswith:
  - .png
  - .jpg
  - .jpeg
import_window_root:
  a1: -window
  a2: root
  a3|endswith:
  - .png
  - .jpg
  - .jpeg
```

## MITRE ATT&CK
- T1113

## False Positives
- Legitimate use of screenshot utility

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1113/T1113.md
- https://linux.die.net/man/1/import
- https://imagemagick.org/

## Metadata
- **Author:** Pawel Mazur
- **Date:** 2021-09-21
- **Rule ID:** `dbe4b9c5-c254-4258-9688-d6af0b7967fd`
- **Source file:** `linux/auditd/execve/lnx_auditd_screencapture_import.yml`
