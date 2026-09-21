---
type: campaign
scenario_id: 90
tactic: Defense Evasion
technique: "T1218.006: Mmc"
technique_id: T1218.006
tags: [campaign, lotl, defense_evasion]
---

# Using mmc.exe to execute malicious snap-in.

## Threat Description
Using mmc.exe to execute malicious snap-in.

## Attack Command
```
mmc /s $(echo malicious$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).msc)
```

## Detection Logic
Monitor mmc snap-ins: `wmic process where name='mmc.exe' get commandline | findstr msc`; Event ID 4688.

## Mitigation
Restrict mmc: `icacls %windir%\System32\mmc.exe /deny Everyone:RX`; Disable snap-in execution: AppLocker.

## AI Training Prompt
Train AI to detect mmc snap-in execution and suggest AppLocker policies.

## References
- MITRE ATT&CK T1218.006: https://attack.mitre.org/techniques/T1218/006/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
