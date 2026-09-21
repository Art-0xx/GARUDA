---
type: detection_rule
title: "Potential Credential Dumping Attempt Using New NetworkProvider - CLI"
rule_id: baef1ec6-2ca9-47a3-97cc-4cf2bda10b77
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1003]
---

# Potential Credential Dumping Attempt Using New NetworkProvider - CLI

## Description
Detects when an attacker tries to add a new network provider in order to dump clear text credentials, similar to how the NPPSpy tool does it

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains|all:
  - \System\CurrentControlSet\Services\
  - \NetworkProvider
```

## MITRE ATT&CK
- T1003

## False Positives
- Other legitimate network providers used and not filtred in this rule

## References
- https://learn.microsoft.com/en-us/troubleshoot/windows-client/setup-upgrade-and-drivers/network-provider-settings-removed-in-place-upgrade
- https://github.com/gtworek/PSBits/tree/master/PasswordStealing/NPPSpy

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-08-23
- **Rule ID:** `baef1ec6-2ca9-47a3-97cc-4cf2bda10b77`
- **Source file:** `windows/process_creation/proc_creation_win_registry_new_network_provider.yml`
