---
type: campaign
scenario_id: 154
tactic: Impact
technique: "T1486: Data Encrypted for Impact"
technique_id: T1486
tags: [campaign, lotl, impact]
---

# Using cipher.exe to encrypt files for ransomware simulation.

## Threat Description
Using cipher.exe to encrypt files for ransomware simulation.

## Attack Command
```
cipher /E /S:C:\$(echo data$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8)) > $(echo log$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).txt)
```

## Detection Logic
Monitor cipher: `wmic process where name='cipher.exe' get commandline | findstr /E`; Event ID 4663.

## Mitigation
Restrict cipher: `icacls %windir%\System32\cipher.exe /deny Everyone:RX`; Enable file auditing: `auditpol /set /subcategory:'File System' /success:enable`.

## AI Training Prompt
Train AI to detect cipher.exe file encryption and suggest auditing.

## References
- MITRE ATT&CK T1486: https://attack.mitre.org/techniques/T1486/
- CWE-326: https://cwe.mitre.org/data/definitions/326.html
