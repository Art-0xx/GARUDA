---
type: campaign
scenario_id: 231
tactic: Execution
technique: "T1059.003: Windows Command Shell"
technique_id: T1059.003
tags: [campaign, lotl, execution]
---

# Using icacls to grant malicious permissions to registry key.

## Threat Description
Using icacls to grant malicious permissions to registry key.

## Attack Command
```
icacls "HKLM\Software\$(cat /dev/urandom | tr -dc 'A-Za-z' | head -c 8)" /grant $(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8):F /t
```

## Detection Logic
Monitor icacls registry: `wmic process where name='icacls.exe' get commandline | findstr HKLM`; Event ID 4657.

## Mitigation
Restrict icacls: `icacls %windir%\System32\icacls.exe /deny Everyone:RX`; Audit registry changes: `auditpol /set /subcategory:'Registry' /success:enable`.

## AI Training Prompt
Train AI to detect icacls registry permission abuse and suggest auditing.

## References
- MITRE ATT&CK T1059.003: https://attack.mitre.org/techniques/T1059/003/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
