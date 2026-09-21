---
type: campaign
scenario_id: 236
tactic: Execution
technique: "T1059.003: Windows Command Shell"
technique_id: T1059.003
tags: [campaign, lotl, execution]
---

# Using takeown to seize ownership of sensitive files.

## Threat Description
Using takeown to seize ownership of sensitive files.

## Attack Command
```
takeown /f C:\$(echo target$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).txt) /r /d y
```

## Detection Logic
Monitor takeown: `wmic process where name='takeown.exe' get commandline | findstr /f`; Event ID 4663.

## Mitigation
Restrict takeown: `icacls %windir%\System32\takeown.exe /deny Everyone:RX`; Audit file ownership changes: `auditpol /set /subcategory:'File System' /success:enable`.

## AI Training Prompt
Train AI to detect takeown abuse and suggest auditing.

## References
- MITRE ATT&CK T1059.003: https://attack.mitre.org/techniques/T1059/003/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
