---
type: detection_rule
title: "System Information Discovery Using Ioreg"
rule_id: 2d5e7a8b-f484-4a24-945d-7f0efd52eab0
platform: macos
level: medium
status: test
tags: [detection, sigma, macos]
mitre_tags: [attack.t1082]
---

# System Information Discovery Using Ioreg

## Description
Detects the use of "ioreg" which will show I/O Kit registry information.
This process is used for system information discovery.
It has been observed in-the-wild by calling this process directly or using bash and grep to look for specific strings.

## Log Source
```yaml
category: process_creation
product: macos
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cmd1:
  CommandLine|contains:
  - -l
  - -c
selection_cmd2:
  CommandLine|contains:
  - AppleAHCIDiskDriver
  - IOPlatformExpertDevice
  - Oracle
  - Parallels
  - USB Vendor Name
  - VirtualBox
  - VMware
selection_img:
- Image|endswith: /ioreg
- CommandLine|contains: ioreg
```

## MITRE ATT&CK
- T1082

## False Positives
- Legitimate administrative activities

## References
- https://www.virustotal.com/gui/file/0373d78db6c3c0f6f6dcc409821bf89e1ad8c165d6f95c5c80ecdce2219627d7/behavior
- https://www.virustotal.com/gui/file/4ffdc72d1ff1ee8228e31691020fc275afd1baee5a985403a71ca8c7bd36e2e4/behavior
- https://www.virustotal.com/gui/file/5907d59ec1303cfb5c0a0f4aaca3efc0830707d86c732ba6b9e842b5730b95dc/behavior
- https://www.trendmicro.com/en_ph/research/20/k/new-macos-backdoor-connected-to-oceanlotus-surfaces.html

## Metadata
- **Author:** Joseliyo Sanchez, @Joseliyo_Jstnk
- **Date:** 2023-12-20
- **Rule ID:** `2d5e7a8b-f484-4a24-945d-7f0efd52eab0`
- **Source file:** `macos/process_creation/proc_creation_macos_ioreg_discovery.yml`
