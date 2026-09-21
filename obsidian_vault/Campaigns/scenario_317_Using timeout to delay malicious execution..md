---
type: campaign
scenario_id: 317
tactic: Execution
technique: "T1059.003: Windows Command Shell"
technique_id: T1059.003
tags: [campaign, lotl, execution]
---

# Using timeout to delay malicious execution.

## Threat Description
Using timeout to delay malicious execution.

## Attack Command
```
timeout /t $(shuf -i 10-60 -n 1) && start C:\$(echo evil$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).exe)
```

## Detection Logic
Monitor timeout: `wmic process where name='timeout.exe' get commandline | findstr start`; Event ID 4688.

## Mitigation
Restrict timeout: `icacls %windir%\System32\timeout.exe /deny Everyone:RX`; Audit process creation: `auditpol /set /subcategory:'Process Creation' /success:enable`.

## AI Training Prompt
Train AI to detect timeout delayed execution and suggest process auditing.

## References
- MITRE ATT&CK T1059.003: https://attack.mitre.org/techniques/T1059/003/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
