---
type: detection_rule
title: "Time Travel Debugging Utility Usage - Image"
rule_id: e76c8240-d68f-4773-8880-5c6f63595aaf
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218, attack.t1003.001]
---

# Time Travel Debugging Utility Usage - Image

## Description
Detects usage of Time Travel Debugging Utility. Adversaries can execute malicious processes and dump processes, such as lsass.exe, via tttracer.exe.

## Log Source
```yaml
category: image_load
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  ImageLoaded|endswith:
  - \ttdrecord.dll
  - \ttdwriter.dll
  - \ttdloader.dll
```

## MITRE ATT&CK
- T1218
- T1003.001

## False Positives
- Legitimate usage by software developers/testers

## References
- https://lolbas-project.github.io/lolbas/Binaries/Tttracer/
- https://twitter.com/mattifestation/status/1196390321783025666
- https://twitter.com/oulusoyum/status/1191329746069655553

## Metadata
- **Author:** Ensar Şamil, @sblmsrsn, @oscd_initiative
- **Date:** 2020-10-06
- **Rule ID:** `e76c8240-d68f-4773-8880-5c6f63595aaf`
- **Source file:** `windows/image_load/image_load_dll_tttracer_module_load.yml`
