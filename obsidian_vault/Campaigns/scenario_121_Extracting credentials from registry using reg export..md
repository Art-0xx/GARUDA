---
type: campaign
scenario_id: 121
tactic: Credential Access
technique: "T1552.002: Credentials in Registry"
technique_id: T1552.002
tags: [campaign, lotl, credential_access]
---

# Extracting credentials from registry using reg export.

## Threat Description
Extracting credentials from registry using reg export.

## Attack Command
```
reg export HKLM\Software\$(cat /dev/urandom | tr -dc 'A-Za-z' | head -c 8) $(echo creds$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).reg) /y
```

## Detection Logic
Monitor reg export: `wmic process where name='reg.exe' get commandline | findstr export`; Event ID 4663.

## Mitigation
Restrict reg export: `icacls %windir%\System32\reg.exe /deny Everyone:RX`; Encrypt registry credentials: `reg add HKLM\Software /v password /t REG_SZ /d (ConvertTo-SecureString 'pass' -AsPlainText -Force)`.

## AI Training Prompt
Train AI to detect registry credential export and suggest encryption.

## References
- MITRE ATT&CK T1552.002: https://attack.mitre.org/techniques/T1552/002/
- CWE-522: https://cwe.mitre.org/data/definitions/522.html
