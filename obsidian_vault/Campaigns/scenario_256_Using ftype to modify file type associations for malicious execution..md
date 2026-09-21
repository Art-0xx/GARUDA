---
type: campaign
scenario_id: 256
tactic: Execution
technique: "T1059.003: Windows Command Shell"
technique_id: T1059.003
tags: [campaign, lotl, execution]
---

# Using ftype to modify file type associations for malicious execution.

## Threat Description
Using ftype to modify file type associations for malicious execution.

## Attack Command
```
ftype txtfile=C:\$(echo evil$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).exe) %1
```

## Detection Logic
Monitor ftype changes: `ftype | findstr evil`; Event ID 4657.

## Mitigation
Restrict ftype: `icacls %windir%\System32\ftype.exe /deny Everyone:RX`; Audit registry changes: `auditpol /set /subcategory:'Registry' /success:enable`.

## AI Training Prompt
Train AI to detect ftype association abuse and suggest auditing.

## References
- MITRE ATT&CK T1059.003: https://attack.mitre.org/techniques/T1059/003/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
