---
type: detection_rule
title: "Potential Suspicious BPF Activity - Linux"
rule_id: 0fadd880-6af3-4610-b1e5-008dc3a11b8a
platform: linux
level: high
status: test
tags: [detection, sigma, linux]
---

# Potential Suspicious BPF Activity - Linux

## Description
Detects the presence of "bpf_probe_write_user" BPF helper-generated warning messages. Which could be a sign of suspicious eBPF activity on the system.

## Log Source
```yaml
product: linux
```

## Detection Logic
```yaml
condition: selection
selection:
- bpf_probe_write_user
```

## False Positives
- Unknown

## References
- https://redcanary.com/blog/ebpf-malware/
- https://man7.org/linux/man-pages/man7/bpf-helpers.7.html

## Metadata
- **Author:** Red Canary (idea), Nasreddine Bencherchali
- **Date:** 2023-01-25
- **Rule ID:** `0fadd880-6af3-4610-b1e5-008dc3a11b8a`
- **Source file:** `linux/builtin/lnx_potential_susp_ebpf_activity.yml`
