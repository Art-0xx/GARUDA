---
type: detection_rule
title: "Potential Base64 Decoded From Images"
rule_id: 09a910bf-f71f-4737-9c40-88880ba5913d
platform: macos
level: high
status: test
tags: [detection, sigma, macos]
mitre_tags: [attack.t1140]
---

# Potential Base64 Decoded From Images

## Description
Detects the use of tail to extract bytes at an offset from an image and then decode the base64 value to create a new file with the decoded content. The detected execution is a bash one-liner.

## Log Source
```yaml
category: process_creation
product: macos
```

## Detection Logic
```yaml
condition: all of selection_*
selection_b64:
  CommandLine|contains|all:
  - base64
  - -d
  - '>'
selection_files:
  CommandLine|contains:
  - .avif
  - .gif
  - .jfif
  - .jpeg
  - .jpg
  - .pjp
  - .pjpeg
  - .png
  - .svg
  - .webp
selection_image:
  Image|endswith: /bash
selection_view:
  CommandLine|contains|all:
  - tail
  - -c
```

## MITRE ATT&CK
- T1140

## False Positives
- Unknown

## References
- https://www.virustotal.com/gui/file/16bafdf741e7a13137c489f3c8db1334f171c7cb13b62617d691b0a64783cc48/behavior
- https://www.virustotal.com/gui/file/483fafc64a2b84197e1ef6a3f51e443f84dc5742602e08b9e8ec6ad690b34ed0/behavior

## Metadata
- **Author:** Joseliyo Sanchez, @Joseliyo_Jstnk
- **Date:** 2023-12-20
- **Rule ID:** `09a910bf-f71f-4737-9c40-88880ba5913d`
- **Source file:** `macos/process_creation/proc_creation_macos_tail_base64_decode_from_image.yml`
