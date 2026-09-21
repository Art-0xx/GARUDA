---
type: campaign
scenario_id: 222
tactic: Collection
technique: "T1074.001: Data Staged: Local Data Staging"
technique_id: T1074.001
tags: [campaign, lotl, collection]
---

# Using xcopy to stage sensitive files for exfiltration.

## Threat Description
Using xcopy to stage sensitive files for exfiltration.

## Attack Command
```
xcopy C:\Users\$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8)\Documents\*.docx C:\$(echo stage$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8)) /S /I
```

## Detection Logic
Monitor xcopy: `wmic process where name='xcopy.exe' get commandline | findstr docx`; Event ID 4663.

## Mitigation
Restrict xcopy: `icacls %windir%\System32\xcopy.exe /deny Everyone:RX`; Protect sensitive directories: `icacls C:\Users /deny Everyone:RX`.

## AI Training Prompt
Train AI to detect xcopy data staging and suggest directory protections.

## References
- MITRE ATT&CK T1074.001: https://attack.mitre.org/techniques/T1074/001/
- CWE-200: https://cwe.mitre.org/data/definitions/200.html
