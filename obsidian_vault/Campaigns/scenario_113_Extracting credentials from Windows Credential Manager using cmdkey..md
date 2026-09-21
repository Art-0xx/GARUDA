---
type: campaign
scenario_id: 113
tactic: Credential Access
technique: "T1555.004: Windows Credential Manager"
technique_id: T1555.004
tags: [campaign, lotl, credential_access]
---

# Extracting credentials from Windows Credential Manager using cmdkey.

## Threat Description
Extracting credentials from Windows Credential Manager using cmdkey.

## Attack Command
```
cmdkey /list | findstr Target > $(echo creds$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).txt)
```

## Detection Logic
Monitor cmdkey: `wmic process where name='cmdkey.exe' get commandline | findstr list`; Event ID 4688.

## Mitigation
Restrict cmdkey: `icacls %windir%\System32\cmdkey.exe /deny Everyone:RX`; Enable Credential Guard: `reg add HKLM\System\CurrentControlSet\Control\Lsa /v LsaCfgFlags /t REG_DWORD /d 2`.

## AI Training Prompt
Train AI to detect cmdkey credential extraction and suggest Credential Guard.

## References
- MITRE ATT&CK T1555.004: https://attack.mitre.org/techniques/T1555/004/
- CWE-522: https://cwe.mitre.org/data/definitions/522.html
