---
type: detection_rule
title: "Disable Or Stop Services"
rule_id: de25eeb8-3655-4643-ac3a-b662d3f26b6b
platform: linux
level: medium
status: test
tags: [detection, sigma, linux]
mitre_tags: [attack.t1685, attack.t1489]
---

# Disable Or Stop Services

## Description
Detects the usage of utilities such as 'systemctl', 'service'...etc to stop or disable tools and services on Linux systems.
Attackers may stop or disable security tools and services to evade detection, maintain persistence, or disrupt system operations.

## Log Source
```yaml
category: process_creation
product: linux
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_* and not 1 of filter_optional_*
filter_main_legit_snapd:
  CommandLine|contains:
  - --no-reload disable snap-snapd-
  - ' stop snap-snapd-'
  Image|endswith: /systemctl
filter_main_ssh_preinstall:
  CommandLine|contains|all:
  - ' stop '
  - ssh.
  Image|endswith: /systemctl
  ParentCommandLine|contains: tmp.ci/preinst upgrade
filter_main_ubuntu_upgrade:
  Image|endswith: /systemctl
  ParentCommandLine|contains: /dpkg/info/ubuntu-pro-client.prerm upgrade
filter_optional_aws_agent:
  CommandLine|endswith: snap.amazon-ssm-agent.amazon-ssm-agent.service
  Image|endswith: /systemctl
selection:
  CommandLine|contains:
  - ' stop '
  - ' disable '
  Image|endswith:
  - /service
  - /systemctl
  - /chkconfig
```

## MITRE ATT&CK
- T1685
- T1489

## False Positives
- Legitimate administration activities
- Some false positives are to be expected. Apply additional filters as needed before pushing to production.

## References
- https://www.trendmicro.com/pl_pl/research/20/i/the-evolution-of-malicious-shell-scripts.html

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-09-15
- **Rule ID:** `de25eeb8-3655-4643-ac3a-b662d3f26b6b`
- **Source file:** `linux/process_creation/proc_creation_lnx_services_stop_and_disable.yml`
