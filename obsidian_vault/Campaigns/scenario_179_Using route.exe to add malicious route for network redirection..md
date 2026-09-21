---
type: campaign
scenario_id: 179
tactic: Execution
technique: "T1059.003: Windows Command Shell"
technique_id: T1059.003
tags: [campaign, lotl, execution]
---

# Using route.exe to add malicious route for network redirection.

## Threat Description
Using route.exe to add malicious route for network redirection.

## Attack Command
```
route add 0.0.0.0 mask 0.0.0.0 $(cat /dev/urandom | tr -dc '0-9' | head -c 3).$(cat /dev/urandom | tr -dc '0-9' | head -c 3).$(cat /dev/urandom | tr -dc '0-9' | head -c 3).$(cat /dev/urandom | tr -dc '0-9' | head -c 3) metric 1 if $(cat /dev/urandom | tr -dc '0-9' | head -c 2)
```

## Detection Logic
Monitor route changes: `route print | findstr $(cat /dev/urandom | tr -dc '0-9' | head -c 3)`; Event ID 4657.

## Mitigation
Restrict route: `icacls %windir%\System32\route.exe /deny Everyone:RX`; Audit network changes: `auditpol /set /subcategory:'Network Policy Change' /success:enable`.

## AI Training Prompt
Train AI to detect route table manipulation and suggest network auditing.

## References
- MITRE ATT&CK T1059.003: https://attack.mitre.org/techniques/T1059/003/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
