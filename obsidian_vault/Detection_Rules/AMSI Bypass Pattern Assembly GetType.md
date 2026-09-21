---
type: detection_rule
title: "AMSI Bypass Pattern Assembly GetType"
rule_id: e0d6c087-2d1c-47fd-8799-3904103c5a98
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1685]
---

# AMSI Bypass Pattern Assembly GetType

## Description
Detects code fragments found in small and obfuscated AMSI bypass PowerShell scripts

## Log Source
```yaml
category: ps_script
definition: 'Requirements: Script Block Logging must be enabled'
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  ScriptBlockText|contains|all:
  - '[Ref].Assembly.GetType'
  - SetValue($null,$true)
  - NonPublic,Static
```

## MITRE ATT&CK
- T1685

## False Positives
- Unknown

## References
- https://www.mdsec.co.uk/2018/06/exploring-powershell-amsi-and-logging-evasion/
- https://twitter.com/cyb3rops/status/1588574518057979905?s=20&t=A7hh93ONM7ni1Rj1jO5OaA

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2022-11-09
- **Rule ID:** `e0d6c087-2d1c-47fd-8799-3904103c5a98`
- **Source file:** `windows/powershell/powershell_script/posh_ps_amsi_bypass_pattern_nov22.yml`
