---
type: campaign
scenario_id: 59
tactic: Execution
technique: "T1059.003: Windows Command Shell"
technique_id: T1059.003
tags: [campaign, lotl, execution]
---

# Using makecab.exe to create malicious CAB file for code execution.

## Threat Description
Using makecab.exe to create malicious CAB file for code execution.

## Attack Command
```
makecab $(echo payload$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).exe) $(echo cab$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).cab)
```

## Detection Logic
Monitor makecab: `wmic process where name='makecab.exe' get commandline`; Event ID 4688.

## Mitigation
Restrict makecab: `icacls %windir%\System32\makecab.exe /deny Everyone:RX`; Monitor CAB file creation.

## AI Training Prompt
Train AI to detect makecab abuse and suggest access controls.

## References
- MITRE ATT&CK T1059.003: https://attack.mitre.org/techniques/T1059/003/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
