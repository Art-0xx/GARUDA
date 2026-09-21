---
type: detection_rule
title: "Windows Default Domain GPO Modification via GPME"
rule_id: dcff7e85-d01f-4eb5-badd-84e2e6be8294
platform: windows
level: medium
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1484.001]
---

# Windows Default Domain GPO Modification via GPME

## Description
Detects the use of the Group Policy Management Editor (GPME) to modify Default Domain or Default Domain Controllers Group Policy Objects (GPOs).
Adversaries may leverage GPME to make stealthy changes in these default GPOs to deploy malicious GPOs configurations across the domain without raising suspicion.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_default_gpos:
  CommandLine|contains:
  - 31B2F340-016D-11D2-945F-00C04FB984F9
  - 6AC1786C-016F-11D2-945F-00C04FB984F9
selection_gpme:
  CommandLine|contains|all:
  - gpme.msc
  - 'gpobject:'
selection_mmc:
- Image|endswith: \mmc.exe
- OriginalFileName: MMC.exe
```

## MITRE ATT&CK
- T1484.001

## False Positives
- Legitimate use of GPME to modify GPOs

## References
- https://www.trendmicro.com/en_us/research/25/i/unmasking-the-gentlemen-ransomware.html
- https://adsecurity.org/?p=3377
- https://sdmsoftware.com/general-stuff/launching-the-new-gp-management-editor-from-the-command-line/
- https://www.pentestpartners.com/security-blog/living-off-the-land-gpo-style/

## Metadata
- **Author:** TropChaud
- **Date:** 2025-11-22
- **Rule ID:** `dcff7e85-d01f-4eb5-badd-84e2e6be8294`
- **Source file:** `windows/process_creation/proc_creation_win_mmc_default_domain_gpo_modification_via_gpme.yml`
