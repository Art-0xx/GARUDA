---
type: campaign
scenario_id: 132
tactic: Persistence
technique: "T1546.001: Change Default File Association"
technique_id: T1546.001
tags: [campaign, lotl, persistence]
---

# Changing PDF file association to execute malicious program.

## Threat Description
Changing PDF file association to execute malicious program.

## Attack Command
```
assoc .pdf=$(echo evil$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).exe)
```

## Detection Logic
Monitor file associations: `assoc | findstr evil`; Event ID 4657.

## Mitigation
Restrict assoc changes: `regini -h deny HKCR`; Audit registry changes: Event ID 4657.

## AI Training Prompt
Train AI to detect PDF file association changes and suggest registry protections.

## References
- MITRE ATT&CK T1546.001: https://attack.mitre.org/techniques/T1546/001/
- CWE-732: https://cwe.mitre.org/data/definitions/732.html
