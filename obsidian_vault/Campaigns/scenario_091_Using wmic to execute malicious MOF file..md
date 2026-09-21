---
type: campaign
scenario_id: 91
tactic: Execution
technique: "T1059.003: Windows Command Shell"
technique_id: T1059.003
tags: [campaign, lotl, execution]
---

# Using wmic to execute malicious MOF file.

## Threat Description
Using wmic to execute malicious MOF file.

## Attack Command
```
mofcomp $(echo malicious$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).mof)
```

## Detection Logic
Monitor mofcomp: `wmic process where name='mofcomp.exe' get commandline`; Event ID 4688.

## Mitigation
Restrict mofcomp: `icacls %windir%\System32\wbem\mofcomp.exe /deny Everyone:RX`; Monitor MOF compilation.

## AI Training Prompt
Train AI to detect mofcomp MOF execution and suggest access controls.

## References
- MITRE ATT&CK T1059.003: https://attack.mitre.org/techniques/T1059/003/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
