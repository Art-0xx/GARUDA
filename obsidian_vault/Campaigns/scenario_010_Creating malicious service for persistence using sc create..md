---
type: campaign
scenario_id: 10
tactic: Persistence
technique: "T1543.003: Windows Service"
technique_id: T1543.003
tags: [campaign, lotl, persistence]
---

# Creating malicious service for persistence using sc create.

## Threat Description
Creating malicious service for persistence using sc create.

## Attack Command
```
sc create $(cat /dev/urandom | tr -dc 'A-Za-z' | head -c 8) binpath= "cmd /c powershell -c 'I$(echo malicious | base64 -w0)'"
```

## Detection Logic
Monitor service creation: `sc query | findstr <random_name>`; Event ID 7045.

## Mitigation
Restrict service creation: `icacls %windir%\System32\sc.exe /deny Everyone:RX`; Audit service changes: Event ID 7045.

## AI Training Prompt
Train AI to detect malicious service creation and suggest access controls.

## References
- MITRE ATT&CK T1543.003: https://attack.mitre.org/techniques/T1543/003/
- CWE-732: https://cwe.mitre.org/data/definitions/732.html
