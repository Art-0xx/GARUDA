---
type: detection_rule
title: "Triple Cross eBPF Rootkit Default Persistence"
rule_id: 1a2ea919-d11d-4d1e-8535-06cda13be20f
platform: linux
level: high
status: test
tags: [detection, sigma, linux]
mitre_tags: [attack.t1053.003]
---

# Triple Cross eBPF Rootkit Default Persistence

## Description
Detects the creation of "ebpfbackdoor" files in both "cron.d" and "sudoers.d" directories. Which both are related to the TripleCross persistence method

## Log Source
```yaml
category: file_event
product: linux
```

## Detection Logic
```yaml
condition: selection
selection:
  TargetFilename|endswith: ebpfbackdoor
```

## MITRE ATT&CK
- T1053.003

## False Positives
- Unlikely

## References
- https://github.com/h3xduck/TripleCross/blob/12629558b8b0a27a5488a0b98f1ea7042e76f8ab/apps/deployer.sh

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-07-05
- **Rule ID:** `1a2ea919-d11d-4d1e-8535-06cda13be20f`
- **Source file:** `linux/file_event/file_event_lnx_triple_cross_rootkit_persistence.yml`
