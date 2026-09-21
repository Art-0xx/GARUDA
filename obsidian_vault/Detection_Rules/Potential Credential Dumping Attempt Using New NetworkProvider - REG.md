---
type: detection_rule
title: "Potential Credential Dumping Attempt Using New NetworkProvider - REG"
rule_id: 0442defa-b4a2-41c9-ae2c-ea7042fc4701
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1003]
---

# Potential Credential Dumping Attempt Using New NetworkProvider - REG

## Description
Detects when an attacker tries to add a new network provider in order to dump clear text credentials, similar to how the NPPSpy tool does it

## Log Source
```yaml
category: registry_set
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter*
filter:
  TargetObject|contains:
  - \System\CurrentControlSet\Services\WebClient\NetworkProvider
  - \System\CurrentControlSet\Services\LanmanWorkstation\NetworkProvider
  - \System\CurrentControlSet\Services\RDPNP\NetworkProvider
filter_valid_procs:
  Image: C:\Windows\System32\poqexec.exe
selection:
  TargetObject|contains|all:
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
- **Rule ID:** `0442defa-b4a2-41c9-ae2c-ea7042fc4701`
- **Source file:** `windows/registry/registry_set/registry_set_new_network_provider.yml`
