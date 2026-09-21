---
type: campaign
scenario_id: 147
tactic: Execution
technique: "T1059.003: Windows Command Shell"
technique_id: T1059.003
tags: [campaign, lotl, execution]
---

# Using schtasks to execute malicious task with obfuscated payload.

## Threat Description
Using schtasks to execute malicious task with obfuscated payload.

## Attack Command
```
schtasks /create /tn $(cat /dev/urandom | tr -dc 'A-Za-z' | head -c 8) /tr "cmd /c powershell -c 'I$(echo malicious | base64 -w0)'" /sc onlogon /ru SYSTEM /f
```

## Detection Logic
Monitor schtasks: `schtasks /query | findstr $(cat /dev/urandom | tr -dc 'A-Za-z' | head -c 8)`; Event ID 4698.

## Mitigation
Restrict schtasks: `icacls %windir%\System32\schtasks.exe /deny Everyone:RX`; Audit task creation: Event ID 4698.

## AI Training Prompt
Train AI to detect schtasks malicious task creation and suggest access controls.

## References
- MITRE ATT&CK T1059.003: https://attack.mitre.org/techniques/T1059/003/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
