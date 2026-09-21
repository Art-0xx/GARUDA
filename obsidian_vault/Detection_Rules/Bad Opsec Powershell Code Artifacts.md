---
type: detection_rule
title: "Bad Opsec Powershell Code Artifacts"
rule_id: 8d31a8ce-46b5-4dd6-bdc3-680931f1db86
platform: windows
level: critical
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059.001]
---

# Bad Opsec Powershell Code Artifacts

## Description
focuses on trivial artifacts observed in variants of prevalent offensive ps1 payloads, including
Cobalt Strike Beacon, PoshC2, Powerview, Letmein, Empire, Powersploit, and other attack payloads
that often undergo minimal changes by attackers due to bad opsec.

## Log Source
```yaml
category: ps_module
definition: 0ad03ef1-f21b-4a79-8ce8-e6900c54b65b
product: windows
```

## Detection Logic
```yaml
condition: selection_4103
selection_4103:
  Payload|contains:
  - $DoIt
  - harmj0y
  - mattifestation
  - _RastaMouse
  - tifkin_
  - '0xdeadbeef'
```

## MITRE ATT&CK
- T1059.001

## False Positives
- Moderate-to-low; Despite the shorter length/lower entropy for some of these, because of high specificity, fp appears to be fairly limited in many environments.

## References
- https://newtonpaul.com/analysing-fileless-malware-cobalt-strike-beacon/
- https://labs.sentinelone.com/top-tier-russian-organized-cybercrime-group-unveils-fileless-stealthy-powertrick-backdoor-for-high-value-targets/
- https://www.mdeditor.tw/pl/pgRt

## Metadata
- **Author:** ok @securonix invrep_de, oscd.community
- **Date:** 2020-10-09
- **Rule ID:** `8d31a8ce-46b5-4dd6-bdc3-680931f1db86`
- **Source file:** `windows/powershell/powershell_module/posh_pm_bad_opsec_artifacts.yml`
