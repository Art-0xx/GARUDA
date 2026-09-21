---
type: detection_rule
title: "PUA - AdFind Suspicious Execution"
rule_id: 9a132afa-654e-11eb-ae93-0242ac130002
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1018, attack.t1087.002, attack.t1482, attack.t1069.002]
---

# PUA - AdFind Suspicious Execution

## Description
Detects AdFind execution with common flags seen used during attacks

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains:
  - domainlist
  - trustdmp
  - dcmodes
  - adinfo
  - -sc dclist
  - computer_pwdnotreqd
  - objectcategory=
  - -subnets -f
  - name="Domain Admins"
  - '-sc u:'
  - domainncs
  - dompol
  - ' oudmp '
  - subnetdmp
  - gpodmp
  - fspdmp
  - users_noexpire
  - computers_active
  - computers_pwdnotreqd
```

## MITRE ATT&CK
- T1018
- T1087.002
- T1482
- T1069.002

## False Positives
- Legitimate admin activity

## References
- https://www.joeware.net/freetools/tools/adfind/
- https://thedfirreport.com/2020/05/08/adfind-recon/
- https://thedfirreport.com/2021/01/11/trickbot-still-alive-and-well/
- https://www.microsoft.com/security/blog/2021/01/20/deep-dive-into-the-solorigate-second-stage-activation-from-sunburst-to-teardrop-and-raindrop/
- https://social.technet.microsoft.com/wiki/contents/articles/7535.adfind-command-examples.aspx

## Metadata
- **Author:** Janantha Marasinghe (https://github.com/blueteam0ps), FPT.EagleEye Team, omkar72, oscd.community
- **Date:** 2021-02-02
- **Rule ID:** `9a132afa-654e-11eb-ae93-0242ac130002`
- **Source file:** `windows/process_creation/proc_creation_win_pua_adfind_susp_usage.yml`
