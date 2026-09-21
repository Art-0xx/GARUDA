---
type: detection_rule
title: "Potential Qakbot Registry Activity"
rule_id: 1c8e96cd-2bed-487d-9de0-b46c90cade56
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1112]
---

# Potential Qakbot Registry Activity

## Description
Detects a registry key used by IceID in a campaign that distributes malicious OneNote files

## Log Source
```yaml
category: registry_event
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  TargetObject|endswith: \Software\firm\soft\Name
```

## MITRE ATT&CK
- T1112

## False Positives
- Unknown

## References
- https://www.zscaler.com/blogs/security-research/onenote-growing-threat-malware-distribution

## Metadata
- **Author:** Hieu Tran
- **Date:** 2023-03-13
- **Rule ID:** `1c8e96cd-2bed-487d-9de0-b46c90cade56`
- **Source file:** `windows/registry/registry_event/registry_event_malware_qakbot_registry.yml`
