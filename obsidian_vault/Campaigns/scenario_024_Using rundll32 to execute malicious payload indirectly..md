---
type: campaign
scenario_id: 24
tactic: Defense Evasion
technique: "T1218.011: Rundll32"
technique_id: T1218.011
tags: [campaign, lotl, defense_evasion]
---

# Using rundll32 to execute malicious payload indirectly.

## Threat Description
Using rundll32 to execute malicious payload indirectly.

## Attack Command
```
rundll32 $(echo shell$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).dll),ExecutePayload
```

## Detection Logic
Monitor rundll32: `wmic process where name='rundll32.exe' get commandline`; Event ID 4688.

## Mitigation
Restrict rundll32: `icacls %windir%\System32\rundll32.exe /deny Everyone:RX`; Use AppLocker to block unsigned DLLs.

## AI Training Prompt
Train AI to detect rundll32 payload execution and suggest AppLocker policies.

## References
- MITRE ATT&CK T1218.011: https://attack.mitre.org/techniques/T1218/011/
- CWE-732: https://cwe.mitre.org/data/definitions/732.html
