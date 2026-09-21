---
type: detection_rule
title: "Potential File Extension Spoofing Using Right-to-Left Override"
rule_id: 979baf41-ca44-4540-9d0c-4fcef3b5a3a4
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1036.002]
---

# Potential File Extension Spoofing Using Right-to-Left Override

## Description
Detects suspicious filenames that contain a right-to-left override character and a potentially spoofed file extensions.

## Log Source
```yaml
category: file_event
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_extensions:
  TargetFilename|contains:
  - 3pm.
  - 4pm.
  - cod.
  - fdp.
  - ftr.
  - gepj.
  - gnp.
  - gpj.
  - ism.
  - lmth.
  - nls.
  - piz.
  - slx.
  - tdo.
  - vsc.
  - vwm.
  - xcod.
  - xslx.
  - xtpp.
selection_rtlo_unicode:
  TargetFilename|contains:
  - \u202e
  - '[U+202E]'
  - "\u202E"
```

## MITRE ATT&CK
- T1036.002

## False Positives
- Filenames that contains scriptures such as arabic or hebrew might make use of this character

## References
- https://redcanary.com/blog/right-to-left-override/
- https://www.malwarebytes.com/blog/news/2014/01/the-rtlo-method
- https://tria.ge/241015-l98snsyeje/behavioral2
- https://www.unicode.org/versions/Unicode5.2.0/ch02.pdf

## Metadata
- **Author:** Jonathan Peters (Nextron Systems), Florian Roth (Nextron Systems), Swachchhanda Shrawan Poudel (Nextron Systems)
- **Date:** 2024-11-17
- **Rule ID:** `979baf41-ca44-4540-9d0c-4fcef3b5a3a4`
- **Source file:** `windows/file/file_event/file_event_win_susp_right_to_left_override_extension_spoofing.yml`
