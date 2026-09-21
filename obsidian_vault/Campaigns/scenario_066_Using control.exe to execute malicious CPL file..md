---
type: campaign
scenario_id: 66
tactic: Defense Evasion
technique: "T1218.002: Control Panel"
technique_id: T1218.002
tags: [campaign, lotl, defense_evasion]
---

# Using control.exe to execute malicious CPL file.

## Threat Description
Using control.exe to execute malicious CPL file.

## Attack Command
```
control $(echo evil$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).cpl)
```

## Detection Logic
Monitor control.exe: `wmic process where name='control.exe' get commandline`; Event ID 4688.

## Mitigation
Restrict control.exe: `icacls %windir%\System32\control.exe /deny Everyone:RX`; Use AppLocker for CPL files.

## AI Training Prompt
Train AI to detect control.exe CPL execution and suggest AppLocker policies.

## References
- MITRE ATT&CK T1218.002: https://attack.mitre.org/techniques/T1218/002/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
