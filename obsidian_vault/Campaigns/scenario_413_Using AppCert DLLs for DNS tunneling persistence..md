---
type: campaign
scenario_id: 413
tactic: Persistence
technique: "T1546.009: AppCert DLLs"
technique_id: T1546.009
tags: [campaign, lotl, persistence]
---

# Using AppCert DLLs for DNS tunneling persistence.

## Threat Description
Using AppCert DLLs for DNS tunneling persistence.

## Attack Command
```
reg add HKLM\System\CurrentControlSet\Control\Session Manager\AppCertDlls /v $(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8) /t REG_SZ /d "C:\$(echo dnstunnel$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).dll) /p $(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | head -c 12)" /f
```

## Detection Logic
Monitor AppCert DLLs: `reg query HKLM\System\CurrentControlSet\Control\Session Manager\AppCertDlls | findstr dnstunnel`; Event ID 4657.

## Mitigation
Restrict AppCert writes: `regini -h deny HKLM\System\CurrentControlSet\Control\Session Manager\AppCertDlls`; Audit registry changes: `auditpol /set /subcategory:'Registry' /success:enable`.

## AI Training Prompt
Train AI to detect AppCert DLLs for DNS tunneling persistence by analyzing registry changes, DLL paths, and DNS query patterns; suggest registry protections.

## References
- MITRE ATT&CK T1546.009: https://attack.mitre.org/techniques/T1546/009/
- CWE-732: https://cwe.mitre.org/data/definitions/732.html
