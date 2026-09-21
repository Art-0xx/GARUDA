---
type: detection_rule
title: "Windows Defender Threat Severity Default Action Modified"
rule_id: 5a9e1b2c-8f7d-4a1e-9b3c-0f6d7e5a4b1f
platform: windows
level: high
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1685]
---

# Windows Defender Threat Severity Default Action Modified

## Description
Detects modifications or creations of Windows Defender's default threat action settings based on severity to 'allow' or take 'no action'.
This is a highly suspicious configuration change that effectively disables Defender's ability to automatically mitigate threats of a certain severity level,
allowing malicious software to run unimpeded. An attacker might use this technique to bypass defenses before executing payloads.

## Log Source
```yaml
category: registry_event
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Details:
  - DWORD (0x00000006)
  - DWORD (0x00000009)
  TargetObject|contains: \Microsoft\Windows Defender\Threats\ThreatSeverityDefaultAction\
  TargetObject|endswith:
  - \1
  - \2
  - \4
  - \5
```

## MITRE ATT&CK
- T1685

## False Positives
- Legitimate administration via scripts or tools (e.g., SCCM, Intune, GPO enforcement). Correlate with administrative activity.
- Software installations that legitimately modify Defender settings (less common for these specific keys).

## References
- https://learn.microsoft.com/en-us/powershell/module/defender/set-mppreference
- https://learn.microsoft.com/en-us/windows-hardware/customize/desktop/unattend/security-malware-windows-defender-threatseveritydefaultaction
- https://research.splunk.com/endpoint/7215831c-8252-4ae3-8d43-db588e82f952
- https://gist.github.com/Dump-GUY/8daef859f382b895ac6fd0cf094555d2
- https://thedfirreport.com/2021/10/18/icedid-to-xinglocker-ransomware-in-24-hours/

## Metadata
- **Author:** Matt Anderson (Huntress)
- **Date:** 2025-07-11
- **Rule ID:** `5a9e1b2c-8f7d-4a1e-9b3c-0f6d7e5a4b1f`
- **Source file:** `windows/registry/registry_event/registry_event_defender_threat_action_modified.yml`
