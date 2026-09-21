---
type: campaign
scenario_id: 67
tactic: Execution
technique: "T1059.003: Windows Command Shell"
technique_id: T1059.003
tags: [campaign, lotl, execution]
---

# Using ie4uinit.exe to execute malicious INF file.

## Threat Description
Using ie4uinit.exe to execute malicious INF file.

## Attack Command
```
ie4uinit -BaseSettings $(echo malicious$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).inf)
```

## Detection Logic
Monitor ie4uinit: `wmic process where name='ie4uinit.exe' get commandline`; Event ID 4688.

## Mitigation
Restrict ie4uinit: `icacls %windir%\System32\ie4uinit.exe /deny Everyone:RX`; Monitor INF file execution.

## AI Training Prompt
Train AI to detect ie4uinit INF execution and suggest access controls.

## References
- MITRE ATT&CK T1059.003: https://attack.mitre.org/techniques/T1059/003/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
