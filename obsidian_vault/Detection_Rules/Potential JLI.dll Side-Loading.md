---
type: detection_rule
title: "Potential JLI.dll Side-Loading"
rule_id: 7a3b6d1f-4a2b-4f8c-9d7e-e9f8cbf21a35
platform: windows
level: high
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1574.001]
---

# Potential JLI.dll Side-Loading

## Description
Detects potential DLL side-loading of jli.dll.
JLI.dll has been observed being side-loaded by Java processes by various threat actors, including APT41, XWorm,
and others in order to load malicious payloads in context of legitimate Java processes.

## Log Source
```yaml
category: image_load
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_* and not 1 of filter_optional_*
filter_main_legitimate_install_paths:
  Description: OpenJDK Platform binary
  ImageLoaded|startswith:
  - C:\Program Files\
  - C:\Program Files (x86)\
  OriginalFileName: jli.dll
  Product|startswith: OpenJDK Platform
  Signed: 'true'
filter_optional_eclipse:
  ImageLoaded|startswith: C:\eclipse\plugins\
selection:
  ImageLoaded|endswith: \jli.dll
```

## MITRE ATT&CK
- T1574.001

## False Positives
- Unknown

## References
- https://securelist.com/apt41-in-africa/116986/
- https://lab52.io/blog/snake-keylogger-in-geopolitical-affairs-abuse-of-trusted-java-utilities-in-cybercrime-operations/
- https://hijacklibs.net/entries/3rd_party/oracle/jli.html
- https://www.proofpoint.com/us/blog/threat-insight/phish-china-aligned-espionage-actors-ramp-up-taiwan-semiconductor-targeting

## Metadata
- **Author:** Swachchhanda Shrawan Poudel (Nextron Systems)
- **Date:** 2025-07-25
- **Rule ID:** `7a3b6d1f-4a2b-4f8c-9d7e-e9f8cbf21a35`
- **Source file:** `windows/image_load/image_load_side_load_jli.yml`
