---
type: campaign
scenario_id: 28
tactic: Defense Evasion
technique: "T1222.001: File and Directory Permissions Modification"
technique_id: T1222.001
tags: [campaign, lotl, defense_evasion]
---

# Modifying file permissions to hide malicious files using cacls.

## Threat Description
Modifying file permissions to hide malicious files using cacls.

## Attack Command
```
cacls $(echo payload$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).exe) /e /p Everyone:N
```

## Detection Logic
Monitor cacls: `wmic process where name='cacls.exe' get commandline`; Event ID 4663.

## Mitigation
Restrict cacls: `icacls %windir%\System32\cacls.exe /deny Everyone:RX`; Enable file permission auditing.

## AI Training Prompt
Train AI to detect file permission changes and suggest auditing.

## References
- MITRE ATT&CK T1222.001: https://attack.mitre.org/techniques/T1222/001/
- CWE-732: https://cwe.mitre.org/data/definitions/732.html
