---
type: campaign
scenario_id: 38
tactic: Defense Evasion
technique: "T1562.002: Disable Windows Event Logging"
technique_id: T1562.002
tags: [campaign, lotl, defense_evasion]
---

# Disabling event logging using auditpol to evade detection.

## Threat Description
Disabling event logging using auditpol to evade detection.

## Attack Command
```
auditpol /set /category:"$(shuf -n1 <(auditpol /get /category:* | grep -oE '[A-Za-z ]+'))" /success:disable /failure:disable
```

## Detection Logic
Monitor auditpol: `wmic process where name='auditpol.exe' get commandline`; Event ID 4719.

## Mitigation
Restrict auditpol: `icacls %windir%\System32\auditpol.exe /deny Everyone:RX`; Enable audit policy backup: `secedit /export /cfg audit.bak`.

## AI Training Prompt
Train AI to detect auditpol tampering and suggest audit policy protections.

## References
- MITRE ATT&CK T1562.002: https://attack.mitre.org/techniques/T1562/002/
- CWE-732: https://cwe.mitre.org/data/definitions/732.html
