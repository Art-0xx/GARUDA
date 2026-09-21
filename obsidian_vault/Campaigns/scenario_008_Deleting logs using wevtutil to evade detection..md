---
type: campaign
scenario_id: 8
tactic: Defense Evasion
technique: "T1070.004: File Deletion"
technique_id: T1070.004
tags: [campaign, lotl, defense_evasion]
---

# Deleting logs using wevtutil to evade detection.

## Threat Description
Deleting logs using wevtutil to evade detection.

## Attack Command
```
wevtutil cl System /q:"Event[System[EventID=$(shuf -i 1000-9999 -n 1)]]"
```

## Detection Logic
Monitor wevtutil execution: `wmic process where name='wevtutil.exe' get commandline`; Event ID 1102.

## Mitigation
Restrict wevtutil: `icacls %windir%\System32\wevtutil.exe /deny Everyone:RX`; Enable audit log clearing: Event ID 1102.

## AI Training Prompt
Train AI to detect log deletion attempts and suggest access controls.

## References
- MITRE ATT&CK T1070.004: https://attack.mitre.org/techniques/T1070/004/
- CWE-732: https://cwe.mitre.org/data/definitions/732.html
