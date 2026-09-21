---
type: detection_rule
title: "UAC Secure Desktop Prompt Disabled"
rule_id: 0d7ceeef-3539-4392-8953-3dc664912714
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1548.002]
---

# UAC Secure Desktop Prompt Disabled

## Description
Detects when an attacker tries to change User Account Control (UAC) elevation request destination via the "PromptOnSecureDesktop" value.
The "PromptOnSecureDesktop" setting specifically determines whether UAC prompts are displayed on the secure desktop. The secure desktop is a separate desktop environment that's isolated from other processes running on the system. It's designed to prevent malicious software from intercepting or tampering with UAC prompts.
When "PromptOnSecureDesktop" is set to 0, UAC prompts are displayed on the user's current desktop instead of the secure desktop. This reduces the level of security because it potentially exposes the prompts to manipulation by malicious software.

## Log Source
```yaml
category: registry_set
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Details: DWORD (0x00000000)
  TargetObject|contains: \Microsoft\Windows\CurrentVersion\Policies\System\PromptOnSecureDesktop
```

## MITRE ATT&CK
- T1548.002

## False Positives
- Unknown

## References
- https://github.com/redcanaryco/atomic-red-team/blob/7e11e9b79583545f208a6dc3fa062f2ed443d999/atomics/T1548.002/T1548.002.md

## Metadata
- **Author:** frack113
- **Date:** 2024-05-10
- **Rule ID:** `0d7ceeef-3539-4392-8953-3dc664912714`
- **Source file:** `windows/registry/registry_set/registry_set_uac_disable_secure_desktop_prompt.yml`
