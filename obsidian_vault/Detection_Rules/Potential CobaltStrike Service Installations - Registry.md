---
type: detection_rule
title: "Potential CobaltStrike Service Installations - Registry"
rule_id: 61a7697c-cb79-42a8-a2ff-5f0cdfae0130
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1021.002, attack.t1543.003, attack.t1569.002]
---

# Potential CobaltStrike Service Installations - Registry

## Description
Detects known malicious service installs that appear in cases in which a Cobalt Strike beacon elevates privileges or lateral movement.

## Log Source
```yaml
category: registry_set
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_details:
- Details|contains|all:
  - ADMIN$
  - .exe
- Details|contains|all:
  - '%COMSPEC%'
  - start
  - powershell
selection_key:
- TargetObject|contains: \System\CurrentControlSet\Services
- TargetObject|contains|all:
  - \System\ControlSet
  - \Services
```

## MITRE ATT&CK
- T1021.002
- T1543.003
- T1569.002

## False Positives
- Unlikely

## References
- https://www.sans.org/webcasts/tech-tuesday-workshop-cobalt-strike-detection-log-analysis-119395

## Metadata
- **Author:** Wojciech Lesicki
- **Date:** 2021-06-29
- **Rule ID:** `61a7697c-cb79-42a8-a2ff-5f0cdfae0130`
- **Source file:** `windows/registry/registry_set/registry_set_cobaltstrike_service_installs.yml`
