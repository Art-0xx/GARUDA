---
type: campaign
scenario_id: 82
tactic: Defense Evasion
technique: "T1218.014: MMC"
technique_id: T1218.014
tags: [campaign, lotl, defense_evasion]
---

# Using mmc.exe to execute malicious MSC file.

## Threat Description
Using mmc.exe to execute malicious MSC file.

## Attack Command
```
mmc $(echo malicious$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).msc)
```

## Detection Logic
Monitor mmc: `wmic process where name='mmc.exe' get commandline`; Event ID 4688.

## Mitigation
Restrict mmc: `icacls %windir%\System32\mmc.exe /deny Everyone:RX`; Disable MSC execution: AppLocker.

## AI Training Prompt
Train AI to detect mmc MSC execution and suggest AppLocker policies.

## References
- MITRE ATT&CK T1218.014: https://attack.mitre.org/techniques/T1218/014/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
