---
type: campaign
scenario_id: 44
tactic: Persistence
technique: "T1546.009: AppCert DLLs"
technique_id: T1546.009
tags: [campaign, lotl, persistence]
---

# Registering malicious AppCert DLL for persistence.

## Threat Description
Registering malicious AppCert DLL for persistence.

## Attack Command
```
reg add "HKLM\System\CurrentControlSet\Control\Session Manager\AppCertDlls" /v $(cat /dev/urandom | tr -dc 'A-Za-z' | head -c 8) /t REG_SZ /d "$(echo evil$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).dll)"
```

## Detection Logic
Monitor AppCert DLLs: `reg query "HKLM\System\CurrentControlSet\Control\Session Manager\AppCertDlls"`; Event ID 4657.

## Mitigation
Restrict AppCert writes: `regini -h deny "HKLM\System\CurrentControlSet\Control\Session Manager\AppCertDlls"`; Enable DLL auditing.

## AI Training Prompt
Train AI to detect AppCert DLL registrations and suggest registry protections.

## References
- MITRE ATT&CK T1546.009: https://attack.mitre.org/techniques/T1546/009/
- CWE-732: https://cwe.mitre.org/data/definitions/732.html
