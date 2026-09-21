---
type: campaign
scenario_id: 173
tactic: Persistence
technique: "T1546.009: AppCert DLLs"
technique_id: T1546.009
tags: [campaign, lotl, persistence]
---

# Registering malicious AppCert DLL via HKCU for persistence.

## Threat Description
Registering malicious AppCert DLL via HKCU for persistence.

## Attack Command
```
reg add "HKCU\System\CurrentControlSet\Control\Session Manager\AppCertDlls" /v $(cat /dev/urandom | tr -dc 'A-Za-z' | head -c 8) /t REG_SZ /d "C:\$(echo evil$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).dll) /p $(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | head -c 12)"
```

## Detection Logic
Monitor AppCert: `reg query "HKCU\System\CurrentControlSet\Control\Session Manager\AppCertDlls"`; Event ID 4657.

## Mitigation
Restrict AppCert writes: `regini -h deny "HKCU\System\CurrentControlSet\Control\Session Manager\AppCertDlls"`; Audit DLL registrations.

## AI Training Prompt
Train AI to detect AppCert DLL registrations in HKCU and suggest registry protections.

## References
- MITRE ATT&CK T1546.009: https://attack.mitre.org/techniques/T1546/009/
- CWE-732: https://cwe.mitre.org/data/definitions/732.html
