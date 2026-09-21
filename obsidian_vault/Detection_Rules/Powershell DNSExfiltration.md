---
type: detection_rule
title: "Powershell DNSExfiltration"
rule_id: d59d7842-9a21-4bc6-ba98-64bfe0091355
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1048]
---

# Powershell DNSExfiltration

## Description
DNSExfiltrator allows for transferring (exfiltrate) a file over a DNS request covert channel

## Log Source
```yaml
category: ps_script
definition: 'Requirements: Script Block Logging must be enabled'
product: windows
```

## Detection Logic
```yaml
condition: selection_cmdlet
selection_cmdlet:
- ScriptBlockText|contains: Invoke-DNSExfiltrator
- ScriptBlockText|contains|all:
  - ' -i '
  - ' -d '
  - ' -p '
  - ' -doh '
  - ' -t '
```

## MITRE ATT&CK
- T1048

## False Positives
- Legitimate script

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1048/T1048.md#atomic-test-3---dnsexfiltration-doh
- https://github.com/Arno0x/DNSExfiltrator

## Metadata
- **Author:** frack113
- **Date:** 2022-01-07
- **Rule ID:** `d59d7842-9a21-4bc6-ba98-64bfe0091355`
- **Source file:** `windows/powershell/powershell_script/posh_ps_invoke_dnsexfiltration.yml`
