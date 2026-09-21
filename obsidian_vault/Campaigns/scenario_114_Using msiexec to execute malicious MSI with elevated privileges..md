---
type: campaign
scenario_id: 114
tactic: Defense Evasion
technique: "T1218.007: Msiexec"
technique_id: T1218.007
tags: [campaign, lotl, defense_evasion]
---

# Using msiexec to execute malicious MSI with elevated privileges.

## Threat Description
Using msiexec to execute malicious MSI with elevated privileges.

## Attack Command
```
msiexec /quiet /i $(echo malicious$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).msi) ALLUSERS=1
```

## Detection Logic
Monitor msiexec: `wmic process where name='msiexec.exe' get commandline | findstr ALLUSERS`; Event ID 4688.

## Mitigation
Restrict msiexec: `icacls %windir%\System32\msiexec.exe /deny Everyone:RX`; Use AppLocker to block unsigned MSIs.

## AI Training Prompt
Train AI to detect msiexec MSI execution and suggest AppLocker policies.

## References
- MITRE ATT&CK T1218.007: https://attack.mitre.org/techniques/T1218/007/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
