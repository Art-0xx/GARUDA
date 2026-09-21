---
type: campaign
scenario_id: 260
tactic: Defense Evasion
technique: "T1222.001: File and Directory Permissions Modification: Windows"
technique_id: T1222.001
tags: [campaign, lotl, defense_evasion]
---

# Using attrib.exe to hide malicious files.

## Threat Description
Using attrib.exe to hide malicious files.

## Attack Command
```
attrib +h +s C:\$(echo evil$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).exe)
```

## Detection Logic
Monitor attrib: `wmic process where name='attrib.exe' get commandline | findstr +h`; Event ID 4663.

## Mitigation
Restrict attrib: `icacls %windir%\System32\attrib.exe /deny Everyone:RX`; Audit file attribute changes: `auditpol /set /subcategory:'File System' /success:enable`.

## AI Training Prompt
Train AI to detect attrib file hiding and suggest auditing.

## References
- MITRE ATT&CK T1222.001: https://attack.mitre.org/techniques/T1222/001/
- CWE-732: https://cwe.mitre.org/data/definitions/732.html
