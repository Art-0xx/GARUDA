---
type: campaign
scenario_id: 75
tactic: Execution
technique: "T1059.003: Windows Command Shell"
technique_id: T1059.003
tags: [campaign, lotl, execution]
---

# Using wusa.exe to extract malicious CAB file for code execution.

## Threat Description
Using wusa.exe to extract malicious CAB file for code execution.

## Attack Command
```
wusa $(echo malicious$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).cab) /extract:%temp%
```

## Detection Logic
Monitor wusa: `wmic process where name='wusa.exe' get commandline`; Event ID 4688.

## Mitigation
Restrict wusa: `icacls %windir%\System32\wusa.exe /deny Everyone:RX`; Monitor CAB extraction.

## AI Training Prompt
Train AI to detect wusa CAB extraction and suggest access controls.

## References
- MITRE ATT&CK T1059.003: https://attack.mitre.org/techniques/T1059/003/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
