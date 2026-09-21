---
type: detection_rule
title: "MMC Executing Files with Reversed Extensions Using RTLO Abuse"
rule_id: 9cfe4b27-1e56-48b4-b7a8-d46851c91a44
platform: windows
level: high
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1204.002, attack.t1218.014, attack.t1036.002]
---

# MMC Executing Files with Reversed Extensions Using RTLO Abuse

## Description
Detects malicious behavior where the MMC utility (`mmc.exe`) executes files with reversed extensions caused by Right-to-Left Override (RLO) abuse, disguising them as document formats.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_commandline:
  CommandLine|contains:
  - cod.msc
  - fdp.msc
  - ftr.msc
  - lmth.msc
  - slx.msc
  - tdo.msc
  - xcod.msc
  - xslx.msc
  - xtpp.msc
selection_image:
- Image|endswith: \mmc.exe
- OriginalFileName: MMC.exe
```

## MITRE ATT&CK
- T1204.002
- T1218.014
- T1036.002

## False Positives
- Legitimate administrative actions using MMC to execute misnamed `.msc` files.
- Unconventional but non-malicious usage of RLO or reversed extensions.

## References
- https://www.unicode.org/versions/Unicode5.2.0/ch02.pdf
- https://en.wikipedia.org/wiki/Right-to-left_override
- https://tria.ge/241015-l98snsyeje/behavioral2

## Metadata
- **Author:** Swachchhanda Shrawan Poudel (Nextron Systems)
- **Date:** 2025-02-05
- **Rule ID:** `9cfe4b27-1e56-48b4-b7a8-d46851c91a44`
- **Source file:** `windows/process_creation/proc_creation_win_mmc_rlo_abuse_pattern.yml`
