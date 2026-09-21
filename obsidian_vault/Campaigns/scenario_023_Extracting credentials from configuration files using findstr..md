---
type: campaign
scenario_id: 23
tactic: Credential Access
technique: "T1552.001: Credentials in Files"
technique_id: T1552.001
tags: [campaign, lotl, credential_access]
---

# Extracting credentials from configuration files using findstr.

## Threat Description
Extracting credentials from configuration files using findstr.

## Attack Command
```
findstr /s /i password $(echo config$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).ini)
```

## Detection Logic
Monitor findstr: `wmic process where name='findstr.exe' get commandline`; Event ID 4688.

## Mitigation
Encrypt sensitive files: `cipher /e config.ini`; Restrict findstr: `icacls %windir%\System32\findstr.exe /deny Everyone:RX`.

## AI Training Prompt
Train AI to detect credential extraction from files and suggest encryption.

## References
- MITRE ATT&CK T1552.001: https://attack.mitre.org/techniques/T1552/001/
- CWE-522: https://cwe.mitre.org/data/definitions/522.html
