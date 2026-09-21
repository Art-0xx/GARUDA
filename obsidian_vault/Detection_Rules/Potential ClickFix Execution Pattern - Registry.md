---
type: detection_rule
title: "Potential ClickFix Execution Pattern - Registry"
rule_id: f5fe36cf-f1ec-4c23-903d-09a3110f6bbb
platform: windows
level: high
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1204.001]
---

# Potential ClickFix Execution Pattern - Registry

## Description
Detects potential ClickFix malware execution patterns by monitoring registry modifications in RunMRU keys containing HTTP/HTTPS links.
ClickFix is known to be distributed through phishing campaigns and uses techniques like clipboard hijacking and fake CAPTCHA pages.
Through the fakecaptcha pages, the adversary tricks users into opening the Run dialog box and pasting clipboard-hijacked content,
such as one-liners that execute remotely hosted malicious files or scripts.

## Log Source
```yaml
category: registry_set
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_details:
  Details|contains:
  - http://
  - https://
selection_registry:
  TargetObject|contains: \SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\RunMRU\
selection_susp_pattern:
- Details|contains:
  - account
  - anti-bot
  - botcheck
  - captcha
  - challenge
  - confirmation
  - fraud
  - human
  - identification
  - identificator
  - identity
  - robot
  - validation
  - verification
  - verify
- Details|contains:
  - '%comspec%'
  - bitsadmin
  - certutil
  - cmd
  - cscript
  - curl
  - finger
  - mshta
  - powershell
  - pwsh
  - regsvr32
  - rundll32
  - schtasks
  - wget
  - wscript
```

## MITRE ATT&CK
- T1204.001

## False Positives
- Legitimate applications using RunMRU with HTTP links

## References
- https://github.com/JohnHammond/recaptcha-phish
- https://www.zscaler.com/blogs/security-research/deepseek-lure-using-captchas-spread-malware
- https://www.threatdown.com/blog/clipboard-hijacker-tries-to-install-a-trojan/
- https://app.any.run/tasks/5c16b4db-4b36-4039-a0ed-9b09abff8be2
- https://www.esentire.com/security-advisories/netsupport-rat-clickfix-distribution

## Metadata
- **Author:** Swachchhanda Shrawan Poudel (Nextron Systems)
- **Date:** 2025-03-25
- **Rule ID:** `f5fe36cf-f1ec-4c23-903d-09a3110f6bbb`
- **Source file:** `windows/registry/registry_set/registry_set_potential_clickfix_execution.yml`
