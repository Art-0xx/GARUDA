---
type: campaign
scenario_id: 246
tactic: Execution
technique: "T1059.003: Windows Command Shell"
technique_id: T1059.003
tags: [campaign, lotl, execution]
---

# Using assoc to modify file associations for malicious execution.

## Threat Description
Using assoc to modify file associations for malicious execution.

## Attack Command
```
assoc .txt=$(echo evil$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).exe)
```

## Detection Logic
Monitor assoc changes: `assoc | findstr evil`; Event ID 4657.

## Mitigation
Restrict assoc: `icacls %windir%\System32\assoc.exe /deny Everyone:RX`; Audit registry changes: `auditpol /set /subcategory:'Registry' /success:enable`.

## AI Training Prompt
Train AI to detect assoc file association abuse and suggest auditing.

## References
- MITRE ATT&CK T1059.003: https://attack.mitre.org/techniques/T1059/003/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
